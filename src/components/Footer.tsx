import React from 'react';
    import styles from './Footer.module.css';

    const Footer: React.FC = () => {
      const currentYear = new Date().getFullYear();

      return (
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.logoContainer}>
              <div className={styles.logo}>Gatara AI</div>
            </div>
            <div className={styles.linksContainer}>
              <div className={styles.linksColumn}>
                <a href="#" className={styles.link}>Murshed</a>
                <a href="#" className={styles.link}>Company</a>
                <a href="#" className={styles.link}>Careers</a>
              </div>
              <div className={styles.linksColumn}>
                <a href="#" className={styles.link}>Press Inquiries</a>
                <a href="#" className={styles.link}>LinkedIn</a>
                <a href="#" className={styles.link}>Instagram</a>
                <a href="#" className={styles.link}>Facebook</a>
              </div>
              <div className={styles.copyright}>© {currentYear} Gatara AI</div>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;
