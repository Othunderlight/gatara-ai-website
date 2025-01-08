import React from 'react';
    import styles from './OurWorkSection.module.css';

    const OurWorkSection: React.FC = () => {
      return (
        <section className={styles.ourWork}>
          <h2 className={styles.ourWorkTitle}>Our Work</h2>
          <div className={styles.workCards}>
            <div className={styles.workCard}>
              <h4 className={styles.cardCategory}>Product</h4>
              <h3 className={styles.cardTitle}>Murshed for Enterprise</h3>
              <p className={styles.cardDate}>Sep 4, 2024</p>
            </div>
            <div className={styles.workCard}>
              <h4 className={styles.cardCategory}>Alignment - Research</h4>
              <h3 className={styles.cardTitle}>Constitutional AI: Harmlessness from AI Feedback</h3>
              <p className={styles.cardDate}>Dec 15, 2022</p>
            </div>
            <div className={styles.workCard}>
              <h4 className={styles.cardCategory}>Announcements</h4>
              <h3 className={styles.cardTitle}>Core Views on AI Safety: When, Why, What, and How</h3>
              <p className={styles.cardDate}>Mar 8, 2023</p>
            </div>
          </div>
        </section>
      );
    };

    export default OurWorkSection;
