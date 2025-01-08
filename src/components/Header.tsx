import React, { useState } from 'react';
    import styles from './Header.module.css';

    const Header: React.FC = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);

      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
      };

      return (
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.logo}>ANTHROPIC</div>
            <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
              <div className={styles.mainLinks}>
                <a href="#" className={styles.navLink}>Claude</a>
                <a href="#" className={styles.navLink}>Research</a>
                <a href="#" className={styles.navLink}>Company</a>
                <a href="#" className={styles.navLink}>Careers</a>
                <a href="#" className={styles.navLink}>News</a>
              </div>
              
              <div className={styles.secondaryLinks}>
                <a href="#" className={styles.navLink}>Press Inquiries</a>
                <a href="#" className={styles.navLink}>Support</a>
                <a href="#" className={styles.navLink}>Status</a>
                <a href="#" className={styles.navLink}>Availability</a>
                <a href="#" className={styles.navLink}>Twitter</a>
                <a href="#" className={styles.navLink}>LinkedIn</a>
                <a href="#" className={styles.navLink}>YouTube</a>
                <a href="#" className={styles.navLink}>Terms of Service - Consumer</a>
                <a href="#" className={styles.navLink}>Terms of Service - Commercial</a>
              </div>
              <button className={styles.tryClaudeButton}>Try Claude</button>
            </nav>
            <button 
              className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`} 
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </header>
      );
    };

    export default Header;
