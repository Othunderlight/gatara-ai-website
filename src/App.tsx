import React from 'react';
    import Header from './components/Header';
    import HeroSection from './components/HeroSection';
    import AnnouncementsSection from './components/AnnouncementsSection';
    import OurWorkSection from './components/OurWorkSection';
    import WorkWithUsSection from './components/WorkWithUsSection';
    import Footer from './components/Footer';
    import './App.css';

    function App() {
      return (
        <div className="app-container">
          <Header />
          <HeroSection />
          <AnnouncementsSection />
          <OurWorkSection />
          <WorkWithUsSection />
          <Footer />
        </div>
      );
    }

    export default App;
