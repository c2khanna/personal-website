import React from 'react';
import NavBar from '@/components/NavBar';
import HomeHero from '@/components/HomeHero';
import AboutMe from '@/components/AboutMe';
import WorkEx from '@/components/WorkEx';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <div className="main-container">
      <NavBar />
      <HomeHero />
      <AboutMe />
      <WorkEx />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}
