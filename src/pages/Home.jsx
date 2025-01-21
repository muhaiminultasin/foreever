import React from 'react';
import Hero from '../components/Hero';
import LatestCollection from '../components/LatestCollection';
import PopunderAd from '../components/PopUnderadd';

const Home = () => {
  return (
    <div>
      <Hero/>
      <PopunderAd/>
      <LatestCollection/>
    </div>
  )
}

export default Home
