import React from 'react';
    import styles from './AnnouncementsSection.module.css';

    const AnnouncementsSection: React.FC = () => {
      return (
        <section className={styles.announcements}>
          <div className={styles.announcementCard}>
            <div className={styles.announcementContent}>
              <h4 className={styles.announcementTitle}>Announcements</h4>
              <h2 className={styles.announcementHeadline}>
                Introducing computer use, a new Claude 3.5 Sonnet, and Claude 3.5 Haiku
              </h2>
              <p className={styles.announcementDate}>Oct 22, 2024</p>
            </div>
            <div className={styles.modelUpdates}>
              <h4 className={styles.modelUpdatesTitle}>Model updates</h4>
              <a href="#" className={styles.modelLink}>
                3.5 Sonnet
              </a>
              <a href="#" className={styles.modelLink}>
                3.5 Haiku
              </a>
            </div>
          </div>
        </section>
      );
    };

    export default AnnouncementsSection;
