import React from 'react';
import Lottie from 'lottie-web';
import animationData from '../animations/landinganimation/data.js';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonArrow from '../components/ui/Buttons/ButtonArrow';
import { LandingWrapper } from '../styles/jss/styles/landingPage.js';
import { useTheme } from '@mui/material';
import { classes } from './LandingPageStyles.js';
const LandingPage = () => {
  const landingAnimationWrapper = React.useRef(null);
  const theme = useTheme();
  const styles = React.useMemo(() => classes(theme), [theme]);

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
      <Grid container direction='column' sx={styles.mainContainer}>
        <Grid item>
          <Grid
            container
            direction='row'
            justifyContent='flex-end'
            alignItems='center'
          >
            {/* text */}
            <Grid item sm sx={styles.heroTextContainer}>
              <Typography align='center' variant='h2'>
                Bringing West Coast Technology
                <br />
                to the Midwest
              </Typography>
              {/* buttons */}
              <Grid
                container
                justifyContent='center'
                alignItems='center'
                sx={styles.buttonContainer}
              >
                <Grid item>
                  <Button variant='contained' sx={styles.estimateButton}>
                    Free Estimate
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' sx={styles.learnButton}>
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            {/* animation */}
            <Grid item sm>
              <Box
                ref={landingAnimationWrapper}
                id='landingAnimation'
                height={'100%'}
                width={'100%'}
                sx={styles.animationWrapper}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </LandingWrapper>
  );
};

export default LandingPage;
