import { createTheme } from '@mui/material/styles';

const abcBlue = '#0B72B9';
const abcOrange = '#FFBA60';
const abcWhite = '#FFF';
const abcBlack = '#000';
export default createTheme({
  palette: {
    common: {
      blue: `${abcBlue}`,
      orange: `${abcOrange}`,
      white: `${abcWhite}`,
      black: `${abcBlack}`,
    },
    primary: {
      main: `${abcBlue}`,
    },
    secondary: {
      main: `${abcOrange}`,
    },
  },
  typography: {
    tab: {
      opacity: 0.9,
      letterSpacing: 2,
      fontWeight: '600',
      fontFamily: ['Raleway'],
      textTransform: 'capitalize',
      textAlign: 'center',
      fontSize: '1.15rem',
    },
  },
});
