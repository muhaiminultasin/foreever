import React from 'react';
import Hero from '../components/Hero';
import LatestCollection from '../components/LatestCollection';
import AdsterraAd from '../components/AdsterraAd'
import BestSeller from '../components/BestSeller';
import OurPolicy from '../components/OurPolicy';
import NewslatterBox from '../components/NewslatterBox';

const Home = () => {
  return (
    <div>
      <Hero/>
      {/* <AdsterraAd/> */}
      <LatestCollection/>
      <BestSeller/>
      {/* <AdsterraAd/> */}
      <OurPolicy/> 
      <NewslatterBox/> 
    </div>
  )
}

export default Home
