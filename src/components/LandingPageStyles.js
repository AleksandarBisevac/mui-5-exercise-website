export const classes = (theme) => {
  return {
    mainContainer: {
      marginTop: '5em',
      [theme.breakpoints.down('md')]: {
        marginTop: '3em',
      },
      [theme.breakpoints.down('xs')]: {
        marginTop: '2em',
      },
    },
    heroTextContainer: {
      minWidth: '21.5em',
      marginLeft: '1em',
      [theme.breakpoints.down('xs')]: {
        marginLeft: 0,
      },
    },
    animationWrapper: {
      marginLeft: 'auto',
      marginTop: '2em',
      maxWidth: '50em',
      minWidth: '21em',
      [theme.breakpoints.down('md')]: {
        maxWidth: '30em',
      },
    },
    buttonContainer: {
      marginTop: '1em',
    },
    estimateButton: {
      ...theme.typography.estimate,
      backgroundColor: theme.palette.common.orange,
      borderRadius: '50px',
      height: '45px',
      width: '145px',
      marginRight: '40px',
      '&:hover': {
        backgroundColor: theme.palette.secondary.light,
      },
    },
    learnButton: {
      color: theme.palette.common.blue,
      borderColor: theme.palette.common.blue,
      borderWidth: '2px',
      textTransform: 'none',
      borderRadius: '50px',
      fontFamily: 'Roboto',
      fontSize: '0.9rem',
      height: '45px',
      width: '145px',
    },
  };
};
