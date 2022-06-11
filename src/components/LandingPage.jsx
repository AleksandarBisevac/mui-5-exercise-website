import React from 'react';
import Lottie from 'lottie-web';
import animationData from '../animations/landinganimation/data.js';
import { Box } from '@mui/material';
import { LandingWrapper } from '../styles/jss/styles/landingPage.js';

const LandingPage = () => {
  const landingAnimationWrapper = React.useRef(null);

  React.useEffect(() => {
    Lottie.loadAnimation({
      //  container: document.querySelector('#landingAnimation'),
      container: landingAnimationWrapper.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData,
    });
    return () => {
      Lottie.stop();
      Lottie.destroy();
    };
  }, []);

  return (
    <LandingWrapper>
      <Box
        ref={landingAnimationWrapper}
        id='landingAnimation'
        width={'100%'}
        height={'100%'}
      ></Box>
    </LandingWrapper>
  );
};

export default LandingPage;
