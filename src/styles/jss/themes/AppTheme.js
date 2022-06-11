import { createTheme } from '@mui/material/styles';
import { createBreakpoints } from '@mui/system';

const breakpoints = createBreakpoints({});

const abcBlue = '#0B72B9';
const abcBlueSelected = '#0e619a';
const abcOrange = '#FFBA60';
const abcWhite = '#FFF';
const abcBlack = '#000';
export default createTheme({
  palette: {
    common: {
      blue: `${abcBlue}`,
      blueSelected: `${abcBlueSelected}`,
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
      letterSpacing: 1,
      fontWeight: '600',
      fontFamily: ['Raleway'],
      textTransform: 'capitalize',
      textAlign: 'center',
      fontSize: '0.8rem',
      [breakpoints.up('lg')]: { fontSize: '1rem', letterSpacing: 2 },
    },
  },
});
