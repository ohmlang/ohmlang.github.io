Overview
--------

Artifacts and demos for our paper [Incremental Packrat Parsing][paper]
presented at [SLE'17][sle]. The submitted artifacts consist of the following:

- `src/standard.js` => classes for a standard (non-incremental) packrat parser
- `src/incremental.js` => additional classes for implementing an incremental
  parser as described in the paper

- `src/es5.js` => ES5 grammar, which can be instantiated into either a
  standard or incremental parser

- `test/test-es5.js` => contains some basic tests for the ES5 grammar

- `bench/run-benchmark.js` => Helper script for running the various benchmarks
  described in Section 4 of the paper ("Evaluation")

- `bench/benchmark-all.sh` => runs the benchmarks, storing the results into
  the data files in `bench/results`

- `memo-viz.html` => the [memo table visualization][online-viz] mentioned in
  Section 3.1 of the paper

[paper]: https://ohmlang.github.io/pubs/sle2017/incremental-packrat-parsing.pdf
[sle]: https://conf.researchr.org/track/sle-2017/sle-2017-papers
[online-viz]: https://ohmlang.github.io/sle17/memo-viz.html

Setup
-----

A working installation of Node.js v6.1.0 or greater is required. If you
already have Node installed, you can check the version by running:

    node --version

If it is less than v6.1.0, you should install the latest LTS release for
your platform, available at https://nodejs.org. Choose the version labeled
"Recommended for Most Users".

After installing Node, run the following command in the root dir to install
the dependencies:

    npm install

(This requires internet access.)

Other requirements:

- bench/benchmark-all.sh requires a Bash scripting environment (almost any
  Linux or Mac OS installation should suffice)
- memo-viz.html requires an up-to-date, standards compliant browser, e.g.
  Chrome 60 or Safari 10.1.1


Instructions
------------

All commmands listed here should be run in the root of the artifact directory.

- To run the tests:

      npm test

- To run the benchmarks described in Section 4 ("Evaluation"):

      bench/benchmark-all.sh

  This will save the results into the files in the bench/results dir.

- To see the memo table visualization, open memo-viz.html in a web browser.
