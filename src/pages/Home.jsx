import React from 'react';

import Intro from '../components/Home/Intro';
import Courses from '../components/Home/Courses';
import Experience from '../components/Home/Experience';
import Footer from '../components/Home/Footer';

function Home() {
  return (
    <>
      <Intro />
      <Courses />
      <Experience />
      <Footer />
    </>
  );
}

export default Home;
