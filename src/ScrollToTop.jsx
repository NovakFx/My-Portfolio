import { useEffect } from 'react';

const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.location.hash) {
      window.location.hash = '';
    }
  }, []); 

  return null;
};

export default ScrollToTop;