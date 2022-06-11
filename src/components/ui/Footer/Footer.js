import React from 'react';
import { Link } from 'react-router-dom';
import { StyledFooter } from '../../../styles/jss/styles/footer';
import footerAdorment from '../../../assets/Footer Adornment.svg';
import { Grid, Hidden } from '@mui/material';
import facebook from '../../../assets/facebook.svg';
import instagram from '../../../assets/instagram.svg';
import twitter from '../../../assets/twitter.svg';

const Footer = ({ tabValue, setTabValue, selectedIndex, setSelectedIndex }) => {
  const handleClick = (index) => {
    setTabValue(index);
  };

  return (
    <StyledFooter>
      <Hidden mdDown>
        <Grid className='mainContainer' container justifyContent='center'>
          {/* One item inside the pattern */}
          <Grid item className='gridItem'>
            <Grid container direction='column'>
              <Grid
                item
                component={Link}
                to='/'
                className='link'
                onClick={(e) => handleClick(0)}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          {/*  */}
          <Grid item className='gridItem'>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                component={Link}
                to='/services'
                className='link'
                onClick={(e) => {
                  handleClick(1);
                  setSelectedIndex(0);
                }}
              >
                Services
              </Grid>
              <Grid
                item
                component={Link}
                to='/mobileapps'
                className='link'
                onClick={(e) => {
                  handleClick(1);
                  setSelectedIndex(1);
                }}
              >
                Mobile App Development
              </Grid>
              <Grid
                item
                component={Link}
                to='/websites'
                className='link'
                onClick={(e) => {
                  handleClick(1);
                  setSelectedIndex(2);
                }}
              >
                Website Development
              </Grid>
              <Grid
                item
                component={Link}
                to='/customsoftware'
                className='link'
                onClick={(e) => {
                  handleClick(1);
                  setSelectedIndex(3);
                }}
              >
                Custom Software Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className='gridItem'>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                component={Link}
                to='/revolution'
                className='link'
                onClick={(e) => handleClick(2)}
              >
                The Revolution
              </Grid>
              <Grid
                item
                component={Link}
                to='/revolution'
                className='link'
                onClick={(e) => handleClick(2)}
              >
                Vision
              </Grid>
              <Grid
                item
                component={Link}
                to='/revolution'
                className='link'
                onClick={(e) => handleClick(2)}
              >
                Technology
              </Grid>
              <Grid
                item
                component={Link}
                to='/revolution'
                className='link'
                onClick={(e) => handleClick(2)}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className='gridItem'>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                component={Link}
                to='/about'
                className='link'
                onClick={(e) => handleClick(3)}
              >
                About Us
              </Grid>
              <Grid
                item
                component={Link}
                to='/about'
                className='link'
                onClick={(e) => handleClick(3)}
              >
                History
              </Grid>
              <Grid
                item
                component={Link}
                to='/about'
                className='link'
                onClick={(e) => handleClick(3)}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className='gridItem'>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                component={Link}
                to='/contact'
                className='link'
                onClick={(e) => handleClick(4)}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        alt='black decorative slash'
        src={footerAdorment}
        className='adornment'
      />
      <Grid container justifyContent='flex-end' className='socialContainer'>
        <Grid
          item
          component={'a'}
          href='https://www.facebook.com'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img alt='facebook logo' src={facebook} className='socMedIcon' />
        </Grid>
        <Grid
          item
          component={'a'}
          href='https://www.instagram.com'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img alt='instagram logo' src={instagram} className='socMedIcon' />
        </Grid>
        <Grid
          item
          component={'a'}
          href='https://www.twitter.com'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img alt='twitter logo' src={twitter} className='socMedIcon' />
        </Grid>
      </Grid>
    </StyledFooter>
  );
};

export default Footer;
