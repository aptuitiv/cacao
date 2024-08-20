import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/get-started"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout title={siteConfig.title} description={siteConfig.tagline}>
            <HomepageHeader />
            <main>
                <div className="container">
                    <div className="margin-horiz--xl margin-vert--xl">
                        <p>
                            Cacao is a utility class CSS library. It
                            intentionally does not provide styles for specific
                            components. Rather, it has utility classes for doing
                            common things like grids, setting heights and
                            widths, and gutters.
                        </p>

                        <p>
                            (The `embed` style is the exception to that rule,
                            but it only provides the minimal CSS to responsively
                            embed an iframe.)
                        </p>
                    </div>
                </div>
                <HomepageFeatures />
                <div className="container">
                    <div className="row">
                        <div className="col col--6">
                            <Heading as="h2">Included modules</Heading>
                            <ul>
                                <li>Aspect ratios</li>
                                <li>Clearfix</li>
                                <li>Display styles</li>
                                <li>Embed media</li>
                                <li>Fit</li>
                                <li>Grid</li>
                                <li>Grid columns</li>
                                <li>Gutter</li>
                                <li>Height</li>
                                <li>Images</li>
                                <li>Links</li>
                                <li>Margin</li>
                                <li>Padding</li>
                                <li>Position</li>
                                <li>Pull</li>
                                <li>Push</li>
                                <li>Spacing</li>
                                <li>Typography</li>
                                <li>Width</li>
                            </ul>
                        </div>
                        <div className="col col--6">
                            <Heading as="h2">Included breakpoints</Heading>
                            <ul>
                                <li>3xs: &gt;= 240px</li>
                                <li>2xs: &gt;= 360px</li>
                                <li>xs: &gt;= 420px</li>
                                <li>sm: &gt;= 576px</li>
                                <li>md: &gt;= 768px</li>
                                <li>lg: &gt;= 1024px</li>
                                <li>xl: &gt;= 1280px</li>
                                <li>2xl: &gt;= 1440px</li>
                                <li>3xl: &gt;= 1600px</li>
                                <li>4xl: &gt;= 1920px</li>
                                <li>5xl: &gt;= 2560px</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
