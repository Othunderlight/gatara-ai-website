import React from 'react';
    import styles from './WorkWithUsSection.module.css';

    const WorkWithUsSection: React.FC = () => {
      return (
        <section className={styles.workWithUs}>
          <div className={styles.imageContainer}>
            <img
              src="https://images.unsplash.com/photo-1586297135537-94bc9ba060d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              alt="Office"
              className={styles.officeImage}
            />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>Work with Gatara AI</h2>
            <p className={styles.description}>
              Gatara AI is an AI safety and research company based in San Francisco. Our interdisciplinary team has
              experience across ML, physics, policy, and product. Together, we generate research and create reliable,
              beneficial AI systems.
            </p>
            <button className={styles.openRolesButton}>See open roles</button>
          </div>
        </section>
      );
    };

    export default WorkWithUsSection;
