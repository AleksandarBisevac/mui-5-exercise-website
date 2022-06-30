import { withTheme } from '@emotion/react';
import { styled } from '@mui/material';

export const CallToActionWrapper = styled(withTheme('div'))(({ theme }) => ({
  '.mainContainer': {
    height: '60em',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
  },
  '.learnButton': {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: '35px',
    padding: '5px',
    [theme.breakpoints.down('md')]: {
      marginTop: '2em',
      marginLeft: '50%',
      transform: 'translateX(-50%)',
    },
  },
  '.absoluteContainer': {
    position: 'absolute',
    marginLeft: '5em',
    [theme.breakpoints.down('md')]: {
      marginLeft: '2em',
    },
  },
  '.estimateButton': {
    ...theme.typography.estimate,
    borderRadius: '50px',
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.5em',
    cursor: 'pointer',
    position: 'absolute',
    right: '5em',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '25em',
      right: '50%',
      transform: 'translateX(50%)',
    },
  },
  '.text-center-md': {
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  },
}));
