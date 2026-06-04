import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const sectionPaths = [
      "/services",
      "/how-it-works",
      "/case-studies",
      "/pricing",
      "/testimonials",
      "/contact"
    ];

    if (!sectionPaths.includes(pathname)) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname]);
  return null;
};

export default ScrollToTop;
