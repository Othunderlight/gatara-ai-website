import React from 'react';
    import styles from './Footer.module.css';

    const Footer: React.FC = () => {
      const currentYear = new Date().getFullYear();

      return (
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.logoContainer}>
              <div className={styles.logo}>AI</div>
            </div>
            <div className={styles.linksContainer}>
              <div className={styles.linksColumn}>
                <a href="#" className={styles.link}>Claude</a>
                <a href="#" className={styles.link}>API</a>
                <a href="#" className={styles.link}>Team</a>
                <a href="#" className={styles.link}>Pricing</a>
                <a href="#" className={styles.link}>Research</a>
                <a href="#" className={styles.link}>Company</a>
                <a href="#" className={styles.link}>Customers</a>
                <a href="#" className={styles.link}>News</a>
                <a href="#" className={styles.link}>Careers</a>
              </div>
              <div className={styles.linksColumn}>
                <a href="#" className={styles.link}>Press Inquiries</a>
                <a href="#" className={styles.link}>Support</a>
                <a href="#" className={styles.link}>Status</a>
                <a href="#" className={styles.link}>Availability</a>
                <a href="#" className={styles.link}>Twitter</a>
                <a href="#" className={styles.link}>LinkedIn</a>
                <a href="#" className={styles.link}>YouTube</a>
              </div>
              <div className={styles.linksColumn}>
                <a href="#" className={styles.link}>Terms of Service - Consumer</a>
                <a href="#" className={styles.link}>Terms of Service - Commercial</a>
                <a href="#" className={styles.link}>Privacy Policy</a>
                <a href="#" className={styles.link}>Usage Policy</a>
                <a href="#" className={styles.link}>Responsible Disclosure Policy</a>
                <a href="#" className={styles.link}>Compliance</a>
                <a href="#" className={styles.link}>Privacy Choices</a>
              </div>
              <div className={styles.copyright}>© {currentYear} Anthropic PBC</div>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;
