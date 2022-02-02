import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';

import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import PreHomepageFeaturesContent from './_preHomepageFeaturesContent.mdx';
import PostHomepageFeaturesContent from './_postHomepageFeaturesContent.mdx';

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

const HomepageContent = ({ children, className }) => (
  <div className="container">
    <div className={clsx(styles.homepageContent, className)}>{children}</div>
  </div>
);

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const { title, tagline } = siteConfig;

  const description = [
    'Ohm is a parsing toolkit for JavaScript, consisting of a library and a',
    'domain-specific language. You can use it to parse custom file formats or',
    'quickly build parsers, interpreters, and compilers for programming languages.',
  ].join(' ');

  const pageTitle =
    'Ohm: a user-friendly parsing toolkit for JavaScript and Typescript';
  return (
    <Layout title={title} description={description}>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
      </Head>
      <HomepageHeader />
      <main>
        <HomepageContent className={styles.largeText}>
          <PreHomepageFeaturesContent />
        </HomepageContent>
        <HomepageFeatures />
        <HomepageContent>
          <PostHomepageFeaturesContent />
        </HomepageContent>
      </main>
    </Layout>
  );
}
