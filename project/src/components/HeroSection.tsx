import React from 'react';
    import styles from './HeroSection.module.css';

    const HeroSection: React.FC = () => {
      return (
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              AI <span className={styles.underline}>research</span> and <span className={styles.underline}>products</span>
              <br />
              that put safety at the
              <br />
              frontier
            </h1>
            <div className={styles.cards}>
              <div className={styles.card}>
                <h2 className={styles.cardTitle}>CLAUDE.AI</h2>
                <h3 className={styles.cardSubtitle}>Meet Claude 3.5 Sonnet</h3>
                <p className={styles.cardText}>
                  Claude 3.5 Sonnet, our most intelligent AI model, is now available.
                </p>
                <button className={styles.cardButton}>Talk to Claude</button>
              </div>
              <div className={styles.card}>
                <h2 className={styles.cardTitle}>API</h2>
                <h3 className={styles.cardSubtitle}>Build with Claude</h3>
                <p className={styles.cardText}>
                  Create AI-powered applications and custom experiences using Claude.
                </p>
                <button className={styles.cardButton}>Learn more</button>
              </div>
            </div>
          </div>
          <div className={styles.heroImage}>
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="10" fill="#E9967A" />
              <circle cx="100" cy="50" r="10" fill="#E9967A" />
              <circle cx="150" cy="50" r="10" fill="#E9967A" />
              <circle cx="100" cy="100" r="10" fill="#E9967A" />
              <circle cx="150" cy="150" r="10" fill="#E9967A" />
              <path d="M50 50L100 50" stroke="#E9967A" strokeWidth="2" />
              <path d="M100 50L150 50" stroke="#E9967A" strokeWidth="2" />
              <path d="M100 50L100 100" stroke="#E9967A" strokeWidth="2" />
              <path d="M100 100L150 150" stroke="#E9967A" strokeWidth="2" />
              <path d="M150 150C160 160 170 170 180 180" stroke="black" strokeWidth="2" fill="none" />
              <path d="M180 180C170 170 160 160 150 150" stroke="black" strokeWidth="2" fill="none" />
              <path d="M180 180C190 170 195 160 195 150" stroke="black" strokeWidth="2" fill="none" />
              <path d="M195 150C195 160 190 170 180 180" stroke="black" strokeWidth="2" fill="none" />
              <path d="M195 150C190 140 180 130 170 120" stroke="black" strokeWidth="2" fill="none" />
              <path d="M170 120C180 130 190 140 195 150" stroke="black" strokeWidth="2" fill="none" />
              <path d="M170 120C160 110 150 100 140 90" stroke="black" strokeWidth="2" fill="none" />
              <path d="M140 90C150 100 160 110 170 120" stroke="black" strokeWidth="2" fill="none" />
              <path d="M140 90C130 80 120 70 110 60" stroke="black" strokeWidth="2" fill="none" />
              <path d="M110 60C120 70 130 80 140 90" stroke="black" strokeWidth="2" fill="none" />
              <path d="M110 60C100 50 90 40 80 30" stroke="black" strokeWidth="2" fill="none" />
              <path d="M80 30C90 40 100 50 110 60" stroke="black" strokeWidth="2" fill="none" />
              <path d="M80 30C70 20 60 10 50 0" stroke="black" strokeWidth="2" fill="none" />
              <path d="M50 0C60 10 70 20 80 30" stroke="black" strokeWidth="2" fill="none" />
              <path d="M50 0C40 10 30 20 20 30" stroke="black" strokeWidth="2" fill="none" />
              <path d="M20 30C30 20 40 10 50 0" stroke="black" strokeWidth="2" fill="none" />
              <path d="M20 30C10 40 0 50 0 60" stroke="black" strokeWidth="2" fill="none" />
              <path d="M0 60C10 50 20 40 20 30" stroke="black" strokeWidth="2" fill="none" />
              <path d="M0 60C10 70 20 80 30 90" stroke="black" strokeWidth="2" fill="none" />
              <path d="M30 90C20 80 10 70 0 60" stroke="black" strokeWidth="2" fill="none" />
              <path d="M30 90C40 100 50 110 60 120" stroke="black" strokeWidth="2" fill="none" />
              <path d="M60 120C50 110 40 100 30 90" stroke="black" strokeWidth="2" fill="none" />
              <path d="M60 120C70 130 80 140 90 150" stroke="black" strokeWidth="2" fill="none" />
              <path d="M90 150C80 140 70 130 60 120" stroke="black" strokeWidth="2" fill="none" />
              <path d="M90 150C100 160 110 170 120 180" stroke="black" strokeWidth="2" fill="none" />
              <path d="M120 180C110 170 100 160 90 150" stroke="black" strokeWidth="2" fill="none" />
              <path d="M120 180C130 190 140 200 150 200" stroke="black" strokeWidth="2" fill="none" />
              <path d="M150 200C140 200 130 190 120 180" stroke="black" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </section>
      );
    };

    export default HeroSection;
