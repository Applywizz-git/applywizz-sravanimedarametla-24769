import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const useAOS = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
      delay: 0,
      disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    });

    return () => {
      AOS.refresh();
    };
  }, []);
};