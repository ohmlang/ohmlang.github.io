import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Grammar extension',
    description: (
      <>
        Object-oriented grammar extension makes it easy to extend an existing
        language with new syntax.
      </>
    ),
  },
  {
    title: 'Modular semantic actions',
    description: (
      <>
        Unlike many similar tools, Ohm completely separates grammars from
        semantic actions. This improves modularity and extensibility, and makes
        both grammars and semantic actions easier to read and understand.
      </>
    ),
  },
  {
    title: 'Online editor and visualizer',
    description: (
      <>
        The <a href="/editor">Ohm Editor</a> provides instant feedback and an
        interactive visualization of the parse. It'll make you feel like you
        have superpowers. 💪
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
