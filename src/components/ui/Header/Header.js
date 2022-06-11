import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderButton, StyledDrawer } from '../../../styles/jss/styles/header';
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Box,
  Button,
  IconButton,
} from '@mui/material';
// utils and services
import { ElevationScroll } from './header-service';
import logo from '../../../assets/logo.svg';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material';
import { MenuSharp } from '@mui/icons-material';
// styles
import { useStyles, StyledMenu } from '../../../styles/jss/styles/header';
import { paths, servicesPaths } from './headerConfiguration';

const Header = ({ tabValue, setTabValue, selectedIndex, setSelectedIndex }) => {
  const { classes } = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const iOS =
    window.process &&
    window.process.browser &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

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

  const handleServiceTabProps = () => {
    return {
      'aria-owns': anchorEl ? 'simple-menu' : undefined,
      'aria-haspopup': anchorEl ? 'menu' : undefined,
      onMouseOver: (e) => handleClick(e),
    };
  };

  React.useEffect(() => {
    if (window.location.pathname === '/' && tabValue !== 0) {
      setTabValue(0);
    } else if (servicesPaths.find((x) => x.path === window.location.pathname)) {
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
  }, [tabValue, selectedIndex]);

  const tabs = (
    <React.Fragment>
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
        {paths.slice(0, paths.length - 1).map((route, index) => (
          <Tab
            key={'tab' + index}
            label={<span className={classes.tab}>{route.label}</span>}
            component={Link}
            to={route.path}
            {...(route.path === '/services' && handleServiceTabProps())}
          />
        ))}
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
        sx={{ zIndex: theme.zIndex.modal + 2 }}
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
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <StyledDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={(e) => setOpenDrawer(false)}
        onOpen={(e) => setOpenDrawer(true)}
      >
        <div className='toolbarSeparator' />
        <List
          disablePadding
          sx={{ width: '280px', backgroundColor: theme.palette.common.blue }}
        >
          {paths.map((path, index) => (
            <ListItem
              key={path.label}
              onClick={(e) => {
                setOpenDrawer(false);
                setTabValue(index);
              }}
              divider
              button
              component={Link}
              to={path.path}
              selected={tabValue === index}
              className={`${
                index === paths.length - 1 ? 'drawerItem-estimate' : ''
              }`}
            >
              <ListItemText disableTypography>{path.label}</ListItemText>
            </ListItem>
          ))}
        </List>
      </StyledDrawer>
      <IconButton
        className={classes.drawerIconWrapper}
        onClick={(e) => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuSharp className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar
          position='fixed'
          color='primary'
          sx={{
            zIndex: theme.zIndex.modal + 1,
          }}
        >
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
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Box className={classes.toolbarMargin}></Box>
    </React.Fragment>
  );
};

export default Header;
