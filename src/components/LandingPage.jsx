import React from 'react';
//components core
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CallToAction from '../components/ui/CallToAction/CallToAction';
//components custom
import {
  BackgroundDiv,
  LandingWrapper,
} from '../styles/jss/styles/landingPage.js';
import ButtonArrow from '../components/ui/Buttons/ButtonArrow';
//assets
import animationData from '../animations/landinganimation/data.js';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websitesIcon from '../assets/websiteIcon.svg';
import revolutionBackground from '../assets/repeatingBackground.svg';
import infoBackground from '../assets/infoBackground.svg';
//styles
import { classes } from './LandingPageStyles.js';
//libraries
import Lottie from 'lottie-web';

const LandingPage = () => {
  const landingAnimationWrapper = React.useRef(null);
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  const styles = React.useMemo(() => classes(theme), [theme]);

  React.useEffect(() => {
    Lottie.loadAnimation({
      //  container: document.querySelector('#landingAnimation'),
      container: landingAnimationWrapper.current,
      renderer: 'svg',
      loop: true,
      autoplay: false,
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
        {/*----- HERO BLOCK -----*/}
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
                  <Button variant='outlined' sx={styles.learnButtonHero}>
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
        {/*----- HERO BLOCK END-----*/}
        {/*----- SERVICES SECTION-----*/}
        {/*----- CUSTOM SOFTWARE BLOCK -----*/}
        <Grid item>
          <Grid
            container
            direction='row'
            sx={styles.serviceContainerStyle}
            justifyContent={matchesMD ? 'center' : undefined}
          >
            <Grid
              item
              style={{
                marginLeft: matchesMD ? 0 : '5em',
                textAlign: matchesMD ? 'center' : undefined,
              }}
            >
              <Typography variant='h4'>Custom Software Development</Typography>
              <Typography variant='subtitle1' sx={styles.subtitle}>
                Save Energy. Save Time. Save Money.
              </Typography>
              <Typography variant='subtitle1'>
                Complete digital solutions, from investigation to{' '}
                <span style={styles.specialText}>celebration</span>.
              </Typography>
              <Button variant='outlined' sx={styles.learnButton}>
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid item sx={styles.icon}>
              <img alt='custom software icon' src={customSoftwareIcon} />
            </Grid>
          </Grid>
        </Grid>
        {/*----- CUSTOM SOFTWARE BLOCK END -----*/}
        {/*----- MOBILE APP DEVELOPMENT BLOCK -----*/}
        <Grid item>
          <Grid
            container
            direction='row'
            sx={styles.serviceContainerStyle}
            justifyContent={matchesMD ? 'center' : 'flex-end'}
          >
            <Grid
              item
              style={{
                textAlign: matchesMD ? 'center' : undefined,
              }}
            >
              <Typography variant='h4'>iOS/Android Development</Typography>
              <Typography variant='subtitle1' sx={styles.subtitle}>
                Extend Functionality. Extend Access. Increase Engagement.
              </Typography>
              <Typography variant='subtitle1'>
                Integrate your web experience or create standalone app{' '}
                {matchesMD ? null : <br />}with either mobile platform
              </Typography>
              <Button variant='outlined' sx={styles.learnButton}>
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid
              item
              sx={styles.icon}
              style={{ marginRight: matchesMD ? 0 : '5em' }}
            >
              <img alt='mobile apps icon' src={mobileAppsIcon} />
            </Grid>
          </Grid>
        </Grid>
        {/*----- MOBILE APP DEVELOPMENT BLOCK END -----*/}
        {/*----- WEBSITES BLOCK -----*/}
        <Grid item>
          <Grid
            container
            direction='row'
            sx={styles.serviceContainerStyle}
            justifyContent={matchesMD ? 'center' : undefined}
          >
            <Grid
              item
              style={{
                marginLeft: matchesMD ? 0 : '5em',
                textAlign: matchesMD ? 'center' : undefined,
              }}
            >
              <Typography variant='h4'>Websites Development</Typography>
              <Typography variant='subtitle1' sx={styles.subtitle}>
                Reach More. Discover More. Sell More.
              </Typography>
              <Typography variant='subtitle1'>
                Optimized for Search Engines, built for speed.
              </Typography>
              <Button variant='outlined' sx={styles.learnButton}>
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid item sx={styles.icon}>
              <img alt='website icon' src={websitesIcon} />
            </Grid>
          </Grid>
        </Grid>
        {/*----- WEBSITES BLOCK END -----*/}
        {/*----- REVOLUTION BLOCK -----*/}
        <Grid item>
          <Grid
            container
            style={{ height: '70em', marginTop: '12em' }}
            alignItems='center'
            justifyContent='center'
          >
            <Card sx={styles.revolutionCard}>
              <CardContent>
                <Grid
                  container
                  direction='column'
                  style={{ textAlign: 'center' }}
                >
                  <Grid item>
                    <Typography variant='h3' gutterBottom>
                      Revolution
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography item variant='subtitle1' gutterBottom>
                      Visionary insights coupled with cutting-edge technology is
                      a recipe for revolution.
                    </Typography>
                    <Button variant='outlined' sx={styles.learnButtonHero}>
                      <span style={{ marginRight: 10 }}>Learn More</span>
                      <ButtonArrow
                        width={15}
                        height={15}
                        fill={theme.palette.common.blue}
                      />
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <BackgroundDiv background={revolutionBackground} />
          </Grid>
        </Grid>
        {/*----- REVOLUTION BLOCK END -----*/}
        {/*----- INFORMATION BLOCK -----*/}
        <Grid item>
          <Grid
            container
            direction='row'
            style={{ height: '70em' }}
            alignItems='center'
          >
            <Grid
              item
              container
              sx={{
                ...styles.informationBlock,
                textAlign: matchesSM ? 'center' : 'inherit',
              }}
              direction={matchesSM ? 'column' : 'row'}
              spacing={matchesSM ? 10 : 0}
            >
              {/* about us */}
              <Grid
                item
                sm
                style={{
                  marginLeft: matchesSM ? 0 : '5em',
                  textAlign: matchesSM ? 'center' : 'left',
                }}
              >
                <Grid container direction='column'>
                  <Typography variant='h2' style={{ color: 'white' }}>
                    About Us
                  </Typography>
                  <Typography variant='subtitle2'>
                    Let's get personal.
                  </Typography>
                  <Grid item>
                    <Button
                      variant='outlined'
                      sx={{
                        ...styles.learnButton,
                        color: 'white',
                        borderColor: 'white',
                      }}
                    >
                      <span style={{ marginRight: 10 }}>Learn More</span>
                      <ButtonArrow
                        width={10}
                        height={10}
                        fill={theme.palette.common.white}
                      />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              {/* Contact Us */}
              <Grid
                item
                sm
                style={{
                  marginRight: matchesSM ? 0 : '5em',
                  textAlign: matchesSM ? 'center' : 'right',
                }}
              >
                <Grid container direction='column'>
                  <Typography variant='h2' style={{ color: 'white' }}>
                    Contact Us
                  </Typography>
                  <Typography variant='subtitle2'>Say Hello.</Typography>
                  <Grid item>
                    <Button
                      variant='outlined'
                      sx={{
                        ...styles.learnButton,
                        color: 'white',
                        borderColor: 'white',
                      }}
                    >
                      <span style={{ marginRight: 10 }}>Learn More</span>
                      <ButtonArrow
                        width={10}
                        height={10}
                        fill={theme.palette.common.white}
                      />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            {/* backgroundImage */}
            <BackgroundDiv background={infoBackground} />
          </Grid>
        </Grid>
        {/*----- INFORMATION BLOCK END -----*/}
        <CallToAction />
        {/*----- SERVICES SECTION END -----*/}
      </Grid>
    </LandingWrapper>
  );
};

export default LandingPage;
