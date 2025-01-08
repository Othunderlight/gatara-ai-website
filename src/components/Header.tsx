import React from 'react';
    import styles from './Header.module.css';

    const Header: React.FC = () => {
      return (
        <header className={styles.header}>
          <div className={styles.logo}>ANTHROPIC</div>
          <nav className={styles.nav}>
            <a href="#" className={styles.navLink}>Claude</a>
            <a href="#" className={styles.navLink}>Research</a>
            <a href="#" className={styles.navLink}>Company</a>
            <a href="#" className={styles.navLink}>Careers</a>
            <a href="#" className={styles.navLink}>News</a>
            <button className={styles.tryClaudeButton}>Try Claude</button>
          </nav>
        </header>
      );
    };

    export default Header;
