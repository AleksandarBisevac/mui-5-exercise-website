import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography, Button, useTheme } from '@mui/material';
import { CallToActionWrapper } from '../../../styles/jss/styles/callToAction';
import ButtonArrow from '../Buttons/ButtonArrow';
import { BackgroundDiv } from '../../../styles/jss/styles/landingPage';
//assets
import background from '../../../assets/background.jpg';
import mobileBackground from '../../../assets/mobileBackground.jpg';

const CallToAction = () => {
  const theme = useTheme();
  return (
    <CallToActionWrapper theme={theme}>
      <Grid container style={{ height: '60em' }} alignItems='center'>
        <Grid item className={'absoluteContainer'}>
          <Grid container direction='column'>
            <Grid item>
              <Typography variant='h2'>
                Simple Software.
                <br />
                Revolutionary results.
              </Typography>
              <Typography variant='subtitle2' style={{ fontSize: '1.5em' }}>
                Take advantage of 21st century.
              </Typography>
              <Button variant='outlined' className={'learnButton'}>
                <span style={{ marginRight: 5 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item variant='contained' className={'estimateButton'}>
          Free Estimate
        </Grid>
        <BackgroundDiv
          background={background}
          mobileBackground={mobileBackground}
          theme={theme}
        />
      </Grid>
    </CallToActionWrapper>
  );
};

export default CallToAction;
