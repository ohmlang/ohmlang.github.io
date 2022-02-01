import React from 'react';
import clsx from 'clsx';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const { title, tagline } = siteConfig;

  const description = [
    'Ohm is a parsing toolkit for JavaScript, consisting of a library and a',
    'domain-specific language. You can use it to parse custom file formats or',
    'quickly build parsers, interpreters, and compilers for programming languages.',
  ].join(' ');

  return (
    <Layout title={title} description={description}>
      <Head>
        <title>
          Ohm: a user-friendly parsing toolkit for JavaScript and Typescript
        </title>
      </Head>
      <HomepageHeader />
      <main>
        <div className="container">
          <div className={styles.homepageDetail}>
            <p>
              Ohm is a parsing toolkit consisting of a library and a
              domain-specific language. You can use it to parse custom file
              formats or quickly build parsers, interpreters, and compilers for
              programming languages.
            </p>

            <p>
              The <i>Ohm language</i> is based on{' '}
              <a href="http://en.wikipedia.org/wiki/Parsing_expression_grammar">
                parsing expression grammars
              </a>{' '}
              (PEGs), which are a formal way of describing syntax, similar to
              regular expressions and context-free grammars. The{' '}
              <i>Ohm library</i> provides a JavaScript interface for creating
              parsers, interpreters, and more from the grammars you write.
            </p>
          </div>
        </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
