import { useEffect } from 'react';

const PopunderAd = () => {
  useEffect(() => {
    // If Sterra offers a global function to trigger pop-under, call it here.
    if (window.sterra && window.sterra.showPopUnder) {
      window.sterra.showPopUnder();
    }
  }, []);

  return null; // No UI is needed for the pop-under since it appears in the background.
};

export default PopunderAd;
