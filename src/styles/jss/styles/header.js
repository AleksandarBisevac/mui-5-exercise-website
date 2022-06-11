import { withTheme } from '@emotion/react';
import {
  alpha,
  Button,
  Menu,
  MenuItem,
  styled,
  SwipeableDrawer,
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    toolbarMargin: {
      // ovo radimo kako bismo pomerili glavni sadržaj ispod header-a koji je fiksno pozicioniran
      ...theme.mixins.toolbar,
      marginBottom: '2rem',
      [theme.breakpoints.down('lg')]: { marginBottom: '0.5rem' },
      [theme.breakpoints.down('sm')]: { marginBottom: '1rem' },
    },
    logo: {
      fontFamily: 'Raleway',
      height: '6rem',
      [theme.breakpoints.down('lg')]: { height: '4rem' },
    },
    tabContainer: {
      marginLeft: 'auto',
    },
    tab: {
      ...theme.typography.tab,
      color: theme.palette.common.white,
    },
    drawerIconWrapper: {
      marginLeft: 'auto !important',
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    drawerIcon: {
      height: '30px !important',
      width: '30px !important',
      marginRight: '15px',
    },
  };
});

export const HeaderButton = styled(withTheme(Button))((props) => ({
  borderRadius: '50px',
  marginLeft: '25px',
  marginRight: '50px',
  fontFamily: 'Raleway',
  fontSize: '1rem',
  fontWeight: 600,
  maxHeight: 60,
  textTransform: 'capitalize',
  textAlign: 'center',
  color: props.theme.palette.common.white,
}));

export const StyledMenu = styled((props) => <Menu elevation={0} {...props} />)(
  ({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[300]
          : 'rgb(55, 65, 81)',
      backgroundColor: theme.palette.primary.main,

      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        ...theme.typography.tab,
        color: theme.palette.common.white,

        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.common.white,
            theme.palette.action.selectedOpacity
          ),
        },
      },
      '& .Mui-selected': {
        backgroundColor: theme.palette.secondary.main,
      },
    },
  })
);

export const StyledDrawer = styled((props) => (
  <SwipeableDrawer keepMounted {...props} />
))(({ theme }) => ({
  '.toolbarSeparator': {
    marginTop: '4rem',
  },
  '& 	.MuiDrawer-paperAnchorLeft': {
    minWidth: 180,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    color:
      theme.palette.mode === 'light'
        ? theme.palette.grey[300]
        : theme.palette.common.blue,
    backgroundColor: theme.palette.primary.main,
  },
  '& .MuiList-root': {
    width: '100%',
  },
  '& .MuiListItem-root': {
    ...theme.typography.tab,
    textAlign: 'start',
    padding: '1rem',
  },
  '& .drawerItem-estimate': {
    backgroundColor: theme.palette.common.orange,
    textWeight: '900',
    letterSpacing: 2,
  },
  '& .Mui-selected': {
    backgroundColor: theme.palette.common.blueSelected,
    opacity: 1,
  },
}));
