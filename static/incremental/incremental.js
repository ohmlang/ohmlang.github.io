'use strict';

class IncrementalMatcher {
  constructor(rules) {
    this.rules = rules;
    this.memoTable = [];
    this.input = '';
  }

  setInput(str) {
    this.replaceInputRange(0, this.input.length, str);
  }

  match() {
    this.pos = 0;
    this.maxExaminedPos = -1;
    const succeeded = new IncRuleApplication('start').eval(this);
    return succeeded && this.pos === this.input.length;
  }

  replaceInputRange(startIdx, endIdx, str) {
    // update input
    this.input = this.input.slice(0, startIdx) + str + this.input.slice(endIdx);

    // update memo table (similar to the above)
    const memoTablePrefix = this.memoTable.slice(0, startIdx);
    const memoTableMiddle = new Array(str.length).fill(null);
    const memoTableSuffix = this.memoTable.slice(endIdx);
    this.memoTable = memoTablePrefix.concat(memoTableMiddle, memoTableSuffix);

    // invalidate results in "prefix" that examined the part of the input that was replaced
    for (var pos = 0; pos < startIdx; pos++) {
      const memoizedResults = this.memoTable[pos];
      if (memoizedResults) {
        memoizedResults.forEach((result, ruleName) => {
          if (pos + result.examinedLength > startIdx) {
            memoizedResults.delete(ruleName);
          }
        });
      }
    }
  }

  hasMemoizedResult(ruleName) {
    const memoizedResults = this.memoTable[this.pos];
    return memoizedResults && memoizedResults.has(ruleName);
  }

  memoizeResult(pos, ruleName, succeeded) {
    let memoizedResults = this.memoTable[pos];
    if (!memoizedResults) {
      memoizedResults = this.memoTable[pos] = new Map();
    }
    const examinedLength = this.maxExaminedPos - pos + 1;
    if (succeeded) {
      const matchLength = this.pos - pos;
      memoizedResults.set(
          ruleName, {
          succeeded: true, matchLength: matchLength, examinedLength: examinedLength});
    } else {
      memoizedResults.set(
          ruleName,
          {succeeded: false, examinedLength: examinedLength});
    }
  }

  useMemoizedResult(ruleName) {
    const memoizedResults = this.memoTable[this.pos];
    const result = memoizedResults.get(ruleName);
    // NOTE: We must always update maxExaminedPos, not just when succeeded.
    this.maxExaminedPos = Math.max(this.maxExaminedPos, this.pos + result.examinedLength - 1);
    if (result.succeeded) {
      this.pos += result.matchLength;
      return true;
    } else {
      return false;
    }
  }

  consume(c) {
    this.maxExaminedPos = Math.max(this.maxExaminedPos, this.pos);
    if (this.input[this.pos] === c) {
      this.pos++;
      return true;
    } else {
      return false;
    }
  }
}

class IncRuleApplication extends PExp {
  constructor(ruleName) {
    super();
    this.ruleName = ruleName;
  }

  eval(matcher) {
    if (matcher.hasMemoizedResult(this.ruleName)) {
      return matcher.useMemoizedResult(this.ruleName);
    } else {
      const origPos = matcher.pos;
      var origMaxExaminedPos = matcher.maxExaminedPos;
      matcher.maxExaminedPos = -1;
      const succeeded = matcher.rules[this.ruleName].eval(matcher);
      matcher.memoizeResult(origPos, this.ruleName, succeeded);
      matcher.maxExaminedPos = Math.max(matcher.maxExaminedPos, origMaxExaminedPos);
      return succeeded;
    }
  }
}

const incArithmetic = (() => {
  const _ = value => new Terminal(value);
  const app = ruleName => new IncRuleApplication(ruleName);
  const seq = (...exps) => new Sequence(exps);
  const choice = (...exps) => new Choice(exps);
  const rep = exp => new Repetition(exp);
  const not = exp => new Not(exp);

  const matcher = new IncrementalMatcher({
    start: app('addExp'),
//    exp: app('addExp'),
    addExp: choice(
        seq(app('mulExp'), _('+'), app('addExp')),
        app('mulExp')
    ),
//    addOp: choice(_('+'), _('-')),
    mulExp: choice(
        seq(app('priExp'), _('*'), app('mulExp')),
        app('priExp')
    ),
//    mulOp: choice(_('*'), _('/')),
    // unExp: choice(
    //   seq(_('-'), app('priExp')),
    //   app('priExp')
    // ),
    priExp: choice(
      seq(_('('), app('addExp'), _(')')),
      app('num')
    ),
    num: seq(app('digit'), rep(app('digit'))),
    digit: choice(_('0'), _('1'), _('2'), _('3'), _('4'), _('5'), _('6'), _('7'), _('8'), _('9'))
  });

  function test(shouldMatch, input) {
    matcher.setInput(input);
    const matched = matcher.match();
    const yesOrNo = matched ? 'yes' : 'no';
    console.log(yesOrNo + ':', input.replace(/ /g, '\u2423'));
    if (matched !== shouldMatch) {
      console.log('^^^ BUG!');
    }
  }

  test(true, '0');
  test(true, '123');
  test(true, '-42');
  test(false, ' 3');
  test(false, '103  ');
  test(true, '1+2');
  test(true, '1-2');
  test(true, '1*2');
  test(true, '1/2');
  test(true, '1+-2');
  test(true, '1--2');
  test(true, '1*-2');
  test(true, '1/-2');
  test(false, '1-+2');
  test(true, '3*4');
  test(true, '(1+2)*3-108/72');
  test(true, '(((32093-3*((((((((5+1)))))))))))');

  // Reset the matcher.
  matcher.setInput('');  
  matcher.memoTable = [];

  return matcher;
})();
