import React from 'react';
import Banner from './Banner/Banner';
import AboutMe from '../../Section/About/AboutMe';
import Projects from '../../Section/Projects';
import Skills from '../../Section/Skills';
import Contact from '../../Section/Contact';

const Home = () => {
  return (
    <div id="home" className="xl:mx-10 md:mx-8 mx-5 ">
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
};

export default Home;
