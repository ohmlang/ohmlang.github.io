'use strict';

// UMD-style boilerplate for a module that works in both Node.js and browsers.
(function(r,f){if(typeof module==='object'&&module.exports){module.exports=f()}else{Object.assign(r,f())}})(this,function(){  // eslint-disable-line

  // Import dependencies from standard.js.
  var {Terminal, Choice, Sequence, Repetition, Not} =
      typeof module === 'object' ? require('./standard') : window;

  class IncrementalMatcher {
    constructor(rules) {
      this.rules = rules;
      this.memoTable = [];
      this.input = '';
    }

    match() {
      this.pos = 0;
      this.maxExaminedPos = -1;
      var cst =
          new IncRuleApplication('start').eval(this);

      if (this.pos === this.input.length) {
        return cst;
      } else {
        return null;
      }
    }

    hasMemoizedResult(ruleName) {
      var col = this.memoTable[this.pos];
      return col && col.memo.has(ruleName);
    }

    memoizeResult(pos, ruleName, cst) {
      var col = this.memoTable[pos];
      if (!col) {
        col = this.memoTable[pos] = {
          memo: new Map(),
          maxExaminedLength: -1
        };
      }
      var examinedLength =
          this.maxExaminedPos - pos + 1;
      if (cst !== null) {
        col.memo.set(ruleName, {
          cst: cst,
          matchLength: this.pos - pos,
          examinedLength: examinedLength
        });
      } else {
        col.memo.set(ruleName, {
          cst: null,
          examinedLength: examinedLength
        });
      }
      col.maxExaminedLength = Math.max(
          col.maxExaminedLength,
          examinedLength);
    }

    useMemoizedResult(ruleName) {
      var col = this.memoTable[this.pos];
      var result = col.memo.get(ruleName);
      this.maxExaminedPos = Math.max(
          this.maxExaminedPos,
          this.pos + result.examinedLength - 1);
      if (result.cst !== null) {
        this.pos += result.matchLength;
        return result.cst;
      }
      return null;
    }

    consume(c) {
      this.maxExaminedPos =
          Math.max(this.maxExaminedPos, this.pos);
      if (this.input[this.pos] === c) {
        this.pos++;
        return true;
      }
      return false;
    }

    applyEdit(startPos, endPos, r) {
      var s = this.input;
      var m = this.memoTable;

      // Step 1: Apply edit to the input
      this.input =
          s.slice(0, startPos) + r + s.slice(endPos);

      // Step 2: Adjust memo table
      this.memoTable = m.slice(0, startPos).concat(
          new Array(r.length).fill(null),
          m.slice(endPos));

      // Step 3: Invalidate overlapping entries
      for (var pos = 0; pos < startPos; pos++) {
        var col = m[pos];
        if (col != null &&
            pos + col.maxExaminedLength > startPos) {
          var newMax = 0;
          for (var [ruleName, entry] of col.memo) {
            var examinedLen = entry.examinedLength;
            if (pos + examinedLen > startPos) {
              col.memo.delete(ruleName);
            } else if (examinedLen > newMax) {
              newMax = examinedLen;
            }
          }
          col.maxExaminedLength = newMax;
        }
      }
    }
  }

  class IncRuleApplication {
    constructor(ruleName) {
      this.ruleName = ruleName;
    }

    eval(matcher) {
      var name = this.ruleName;
      if (matcher.hasMemoizedResult(name)) {
        return matcher.useMemoizedResult(name);
      } else {
        var origPos = matcher.pos;
        var origMax = matcher.maxExaminedPos;
        matcher.maxExaminedPos = -1;
        var cst = matcher.rules[name].eval(matcher);
        matcher.memoizeResult(origPos, name, cst);
        matcher.maxExaminedPos = Math.max(
            matcher.maxExaminedPos,
            origMax);
        return cst;
      }
    }
  }

  // Export the same API as 'standard'.
  return {
    // Classes that are unchanged from standard
    Terminal, Choice, Sequence, Repetition, Not,

    // Classes that need to be overridden with incremental versions
    Matcher: IncrementalMatcher,
    RuleApplication: IncRuleApplication
  };
});
