import Link from '@docusaurus/Link';
import React from 'react';

import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '⚡️ Powerful grammar language',
    description: (
      <>
        <p>
          Full support for left recursion lets you define left-associative
          operators in a natural way.
        </p>

        <p>
          Object-oriented grammar extension makes it easy to extend an existing
          language with new syntax.
        </p>
      </>
    ),
  },
  {
    title: '📦 Modular semantic actions',
    description: (
      <p>
        Unlike many similar tools, Ohm completely separates grammars from
        semantic actions. This improves modularity and extensibility, and makes
        both grammars and semantic actions easier to read and understand.
      </p>
    ),
  },
  {
    title: '🦸 Online editor and visualizer',
    description: (
      <p>
        The <Link href="https://ohmjs.org/editor">Ohm Editor</Link> provides instant feedback and
        an interactive visualization makes the entire execution of the parser
        visible and tangible. It'll make you feel like you have superpowers.
      </p>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={'col col--4'}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        {description}
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
