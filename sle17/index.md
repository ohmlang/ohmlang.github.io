# Incremental Packrat Parsing

This site contains the artifacts and supporting materials for our paper
[Incremental Packrat Parsing][paper] presented at [SLE'17][sle]:

> Packrat parsing is a popular technique for implementing top-down, unlimited-lookahead parsers that operate in guaranteed linear time. In this paper, we describe a method for turning a standard packrat parser into an _incremental parser_ through a simple modification to its memoization strategy. By "incremental", we mean that the parser can perform syntax analysis without completely reparsing the input after each edit operation. This makes packrat parsing suitable for interactive use in code editors and IDEs — even with large inputs. Our experiments show that with our technique, an incremental packrat parser for JavaScript can outperform even a hand-optimized, non-incremental parser.

## Links

- Try the [online visualization][online-viz] as mentioned in Section 3
- Source code for the ES5 parsers described in Section 4:
  * [src/standard.js][standard]: the classes for a standard (non-incremental) packrat parser
  * [src/incremental.js][inc]: additional classes for implementing an incremental parser as described in the paper
  * [src/es5.js][es5]: ES5 grammar, which can be instantiated into either a standard or incremental parser
- [Git repository][repo] with complete artifacts, including benchmark scripts, etc.
- [Ohm][ohm] is our open-source packrat parsing framework, which supports incremental parsing as described in the paper

[paper]: https://ohmjs.org/pubs/sle2017/incremental-packrat-parsing.pdf
[sle]: https://conf.researchr.org/track/sle-2017/sle-2017-papers
[online-viz]: memo-viz.html
[standard]: https://github.com/ohmjs/sle17/blob/master/src/standard.js
[inc]: https://github.com/ohmjs/sle17/blob/master/src/incremental.js
[es5]: https://github.com/ohmjs/sle17/blob/master/src/es5.js
[repo]: https://github.com/ohmjs/sle17
[ohm]: https://ohmjs.org
