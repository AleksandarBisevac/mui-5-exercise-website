import { styled, withTheme } from '@mui/material';

export const StyledFooter = styled((props) => <footer {...props} />)(
  ({ theme }) => ({
    backgroundColor: theme.palette.common.blue,
    width: '100vw',
    position: 'absolute',
    bottom: 0,
    zIndex: theme.zIndex.modal + 2,
    marginTop: '235px',
    [theme.breakpoints.down('md')]: { marginTop: '98px' },
    '& .adornment': {
      width: '24em',
      [theme.breakpoints.down('md')]: { width: '10em' },
      verticalAlign: 'bottom',
    },
    '& .mainContainer': {
      position: 'absolute',
      display: 'flex',
      '& .gridItem': {
        margin: '3em',
        [theme.breakpoints.down('lg')]: { margin: '2em' },
      },

      '& .link': {
        ...theme.typography.tab,
        color: '#fff',
        fontWeight: 'bold',
        textDecoration: 'none',
        textAlign: 'start',
      },
    },
    '& .socialContainer': {
      position: 'absolute',
      right: '1em',
      bottom: '1em',
      [theme.breakpoints.down('sm')]: {
        right: '0.6em',
        bottom: 'calc(98px / 2 - 2.5em / 2)',
      },
    },
    '& .socMedIcon': {
      width: '2rem',
      height: '2rem',
      margin: '0px 1em',
      [theme.breakpoints.down('xs')]: {
        height: '2.5em',
        width: '2.5em',
      },
    },
  })
);
