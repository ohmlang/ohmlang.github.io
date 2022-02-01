'use strict';

class Matcher {
  constructor(rules) {
    this.rules = rules;
  }

  match(input) {
    this.input = input;
    this.pos = 0;
    this.memoTable = [];
    const succeeded = new RuleApplication('start').eval(this);
    return succeeded && this.pos === this.input.length;
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
    if (succeeded) {
      memoizedResults.set(ruleName, {succeeded: true, nextPos: this.pos});
    } else {
      memoizedResults.set(ruleName, {succeeded: false});
    }
  }

  useMemoizedResult(ruleName) {
    const memoizedResults = this.memoTable[this.pos];
    const result = memoizedResults.get(ruleName);
    if (result.succeeded) {
      this.pos = result.nextPos;
      return true;
    } else {
      return false;
    }
  }

  consume(c) {
    if (this.input[this.pos] === c) {
      this.pos++;
      return true;
    } else {
      return false;
    }
  }
}

class PExp {
  eval(matcher) {
    throw new Error('abstract method');
  }
}

class RuleApplication extends PExp {
  constructor(ruleName) {
    super();
    this.ruleName = ruleName;
  }

  eval(matcher) {
    if (matcher.hasMemoizedResult(this.ruleName)) {
      return matcher.useMemoizedResult(this.ruleName);
    } else {
      const origPos = matcher.pos;
      const succeeded = matcher.rules[this.ruleName].eval(matcher);
      matcher.memoizeResult(origPos, this.ruleName, succeeded);
      return succeeded;
    }
  }
}

class Terminal extends PExp {
  constructor(value) {
    super();
    this.value = value;
  }

  eval(matcher) {
    for (let idx = 0; idx < this.value.length; idx++) {
      if (!matcher.consume(this.value[idx])) {
        return false;
      }
    }
    return true;
  }
}

class Choice extends PExp {
  constructor(exps) {
    super();
    this.exps = exps;
  }

  eval(matcher) {
    const origPos = matcher.pos;
    for (let idx = 0; idx < this.exps.length; idx++) {
      matcher.pos = origPos;
      if (this.exps[idx].eval(matcher)) {
        return true;
      }
    }
    return false;
  }
}

class Sequence extends PExp {
  constructor(exps) {
    super();
    this.exps = exps;
  }

  eval(matcher) {
    for (let idx = 0; idx < this.exps.length; idx++) {
      if (!this.exps[idx].eval(matcher)) {
        return false;
      }
    }
    return true;
  }
}

class Not extends PExp {
  constructor(exp) {
    super();
    this.exp = exp;
  }

  eval(matcher) {
    const origPos = matcher.pos;
    if (!this.exp.eval(matcher)) {
      matcher.pos = origPos;
      return true;
    } else {
      return false;
    }
  }
}

class Repetition extends PExp {
  constructor(exp) {
    super();
    this.exp = exp;
  }

  eval(matcher) {
    while (true) {
      const origPos = matcher.pos;
      if (!this.exp.eval(matcher)) {
        matcher.pos = origPos;
        break;
      }
    }
    return true;
  }
}

const arithmetic = (() => {
  const _ = value => new Terminal(value);
  const app = ruleName => new RuleApplication(ruleName);
  const seq = (...exps) => new Sequence(exps);
  const choice = (...exps) => new Choice(exps);
  const rep = exp => new Repetition(exp);
  const not = exp => new Not(exp);

  const matcher = new Matcher({
    start: app('exp'),
    exp: app('addExp'),
    addExp: seq(app('mulExp'), rep(seq(app('addOp'), app('mulExp')))),
    addOp: choice(_('+'), _('-')),
    mulExp: seq(app('unExp'), rep(seq(app('mulOp'), app('unExp')))),
    mulOp: choice(_('*'), _('/')),
    unExp: choice(
      seq(_('-'), app('priExp')),
      app('priExp')
    ),
    priExp: choice(
      seq(_('('), app('exp'), _(')')),
      app('num')
    ),
    num: seq(app('digit'), rep(app('digit'))),
    digit: choice(_('0'), _('1'), _('2'), _('3'), _('4'), _('5'), _('6'), _('7'), _('8'), _('9'))
  });

  function test(shouldMatch, input) {
    const matched = matcher.match(input);
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

  return matcher;
})();
