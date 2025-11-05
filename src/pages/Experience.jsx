import React from 'react';
import Navbar from '../components/Navbar';
import ExperienceSection from '../components/ExperienceSection';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';

const Experience = () => {
  return (
    <PageTransition>
      <Navbar />
      <ExperienceSection showArrow={true} />
      <Footer />
    </PageTransition>
  );
};

export default Experience;
