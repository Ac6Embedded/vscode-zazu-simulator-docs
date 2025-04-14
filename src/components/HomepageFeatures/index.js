import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Documentation',
    Svg: require('@site/static/img/zazu.svg').default,
    to: '@site/docs/Zazu',
    description: (
      <>
        Find the complete user documentation that provides an in-depth look at every 
        feature and capability of Zazu.
      </>
    ),
  },

  {
    title: 'About Ac6',
    Svg: require('@site/static/img/logo_ac6.svg').default,
    to: 'https://www.ac6-training.com/cours.php?ref=oRT5',
    description: (
      <>
        Ac6 specializes in training for embedded real-time systems and Linux. 
        Ac6 also provides engineering, consulting, and expertise. Among their 
        offerings is a comprehensive Zephyr training course that attracted hundreds 
        of engineers. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4', styles.featureItem)}> {/* Centrage */}
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row justify-content-center"> {/* Centre les colonnes */}
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
