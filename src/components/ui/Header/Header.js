import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';
import { HeaderButton } from '../../../styles/jss/styles/header';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// utils and services
import { ElevationScroll } from './header-service';
import { Box, Button } from '@mui/material';
import logo from '../../../assets/logo.svg';

// styles
import { useStyles, StyledMenu } from '../../../styles/jss/styles/header';

const Header = (props) => {
  const { classes } = useStyles();
  const servicesPaths = [
    { path: '/services', label: 'Services' },
    { path: '/mobileApps', label: 'Mobile App Development' },
    { path: '/websites', label: 'Website Development' },
    { path: '/customSoftware', label: 'Custom Software Development' },
  ];
  const [tabValue, setTabValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [selectedIndex, setSelectedIndex] = React.useState(undefined);

  const handleChange = (event, value) => {
    setTabValue(value);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (e, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  React.useEffect(() => {
    if (window.location.pathname === '/' && tabValue !== 0) {
      setTabValue(0);
    } else if (
      servicesPaths.find((x) => x.path === window.location.pathname) &&
      tabValue !== 1
    ) {
      setSelectedIndex(
        servicesPaths.map((x) => x.path).indexOf(window.location.pathname)
      );
      setTabValue(1);
    } else if (window.location.pathname === '/revolution' && tabValue !== 2) {
      setTabValue(2);
    } else if (window.location.pathname === '/about' && tabValue !== 3) {
      setTabValue(3);
    } else if (window.location.pathname === '/contact' && tabValue !== 4) {
      setTabValue(4);
    } else if (window.location.pathname === '/estimate' && tabValue !== 5) {
      setTabValue(5);
    }
  }, [tabValue]);

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position='fixed' color='primary'>
          <Toolbar disableGutters>
            <Button
              component={Link}
              to='/'
              disableRipple
              sx={{ p: 0 }}
              onClick={() => setTabValue(0)}
            >
              <img src={logo} alt='company logo' className={classes.logo} />
            </Button>
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
              <Tab
                label={<span className={classes.tab}>home</span>}
                component={Link}
                to='/'
              />
              <Tab
                aria-owns={anchorEl ? 'simple-menu' : undefined}
                aria-haspopup={anchorEl ? 'menu' : undefined}
                label={<span className={classes.tab}>services</span>}
                component={Link}
                onMouseOver={(e) => handleClick(e)}
                to='/services'
              />
              <Tab
                label={<span className={classes.tab}>the revolution</span>}
                component={Link}
                to='/revolution'
              />
              <Tab
                label={<span className={classes.tab}>about us</span>}
                component={Link}
                to='/about'
              />
              <Tab
                label={<span className={classes.tab}>contact us</span>}
                component={Link}
                to='/contact'
              />
            </Tabs>
            <Link
              to='/estimate'
              onClick={() => setTabValue(5)}
              style={{ textDecoration: 'none' }}
            >
              <HeaderButton variant='contained' color='secondary'>
                Free Estimate
              </HeaderButton>
            </Link>
            <StyledMenu
              id='simple-menu'
              anchorEl={anchorEl}
              open={open}
              keepMounted
              onClose={handleClose}
              MenuListProps={{
                onMouseLeave: handleClose,
              }}
            >
              {servicesPaths.map((option, index) => (
                <MenuItem
                  key={option.path}
                  onClick={(e) => {
                    handleMenuItemClick(e, index);
                    setTabValue(1);
                    handleClose();
                  }}
                  component={Link}
                  to={option.path}
                  selected={index === selectedIndex && tabValue === 1}
                >
                  {option.label}
                </MenuItem>
              ))}
            </StyledMenu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Box className={classes.toolbarMargin}></Box>
    </React.Fragment>
  );
};

export default Header;
