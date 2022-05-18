import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import { HeaderButton } from '../../../styles/jss/styles/header';
// utils and services
import { ElevationScroll } from './header-service';
import { Box } from '@mui/material';

import logo from '../../../assets/logo.svg';

// styles
import { useStyles } from '../../../styles/jss/styles/header';
import { styles } from '../../../styles/jss/styles/header';

const Header = (props) => {
  const { classes } = useStyles();

  const [tabValue, setTabValue] = React.useState(0);

  const handleChange = (event, value) => {
    setTabValue(value);
  };

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position='fixed' color='primary'>
          <Toolbar disableGutters>
            <img src={logo} alt='company logo' className={classes.logo} />
            <Tabs
              value={tabValue}
              className={classes.tabContainer}
              onChange={handleChange}
              TabIndicatorProps={{
                sx: {
                  backgroundColor: 'common.white',
                  height: '2px',
                },
              }}
            >
              <Tab label={<span className={classes.tab}>home</span>} />
              <Tab label={<span className={classes.tab}>services</span>} />
              <Tab
                label={<span className={classes.tab}>the revolution</span>}
              />
              <Tab label={<span className={classes.tab}>about us</span>} />
              <Tab label={<span className={classes.tab}>contact us</span>} />
            </Tabs>
            <HeaderButton variant='contained' color='secondary'>
              Free Estimate
            </HeaderButton>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Box className={classes.toolbarMargin}></Box>
    </React.Fragment>
  );
};

export default Header;
