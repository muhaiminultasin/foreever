import React from 'react';
import Hero from '../components/Hero';
import LatestCollection from '../components/LatestCollection';
import AdsterraAd from '../components/AdsterraAd'

const Home = () => {
  return (
    <div>
      <Hero/>
      <AdsterraAd/>
      <LatestCollection/>
    </div>
  )
}

export default Home
