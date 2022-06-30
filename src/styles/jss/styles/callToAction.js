import { withTheme } from '@emotion/react';
import { styled } from '@mui/material';

export const CallToActionWrapper = styled(withTheme('div'))(({ theme }) => ({
  '.learnButton': {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: '35px',
    padding: '5px',
    [theme.breakpoints.down('md')]: {
      margin: '2em 0',
    },
  },
  '.absoluteContainer': {
    position: 'absolute',
    marginLeft: '5em',
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
  },
}));
