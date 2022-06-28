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
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white',
    },
    h2: {
      fontFamily: 'Raleway',
      fontSize: '2.5rem',
      color: abcBlue,
      fontWeight: 700,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: 'Pacifico',
      fontSize: '2.5rem',
      color: abcBlue,
    },
    h4: {
      fontFamily: 'Raleway',
      fontSize: '1.75rem',
      color: abcBlue,
      fontWeight: 700,
    },
  },
});
