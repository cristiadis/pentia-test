import React, { useEffect, useState } from 'react';
import { Bar } from './styles';

const ScrollProgressIndicator: React.FunctionComponent = (props) => {
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);

  const onWindowScroll = () => {
    const scrollTop: number = document.body.scrollTop || document.documentElement.scrollTop;
    const height: number = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage: number = (scrollTop / height) * 100;

    setScrollPercentage(scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      requestAnimationFrame(() => {
        onWindowScroll();
      });
    });

    return () => {
      window.removeEventListener('scroll', () => {
        requestAnimationFrame(() => {
          onWindowScroll();
        });
      });
    }
  }, []);

  return (
    <Bar scrollPercentage={ scrollPercentage } />
  );
};

export default ScrollProgressIndicator;