import { withTheme } from '@emotion/react';
import { Button, styled } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    toolbarMargin: {
      // ovo radimo kako bismo pomerili glavni sadržaj ispod header-a koji je fiksno pozicioniran
      ...theme.mixins.toolbar,
      marginBottom: '3rem',
    },
    logo: {
      fontFamily: 'Raleway',
      height: '7rem',
    },
    tabContainer: {
      marginLeft: 'auto',
    },
    tab: {
      ...theme.typography.tab,
      color: theme.palette.common.white,
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
