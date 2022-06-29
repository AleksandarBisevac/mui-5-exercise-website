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
    learnButtonHero: {
      ...theme.typography.learnButton,
      fontSize: '0.9rem',
      height: '45px',
      width: '145px',
    },

    serviceContainerStyle: {
      marginTop: '12em',
      [theme.breakpoints.down('md')]: {
        padding: '25px',
      },
    },

    learnButton: {
      ...theme.typography.learnButton,
      fontSize: '0.7rem',
      height: '35px',
      padding: '5px',
      [theme.breakpoints.down('md')]: {
        margin: '2em 0',
      },
    },
    subtitle: {
      marginBottom: '1em',
    },
    specialText: {
      fontFamily: 'Pacifico',
      color: theme.palette.common.orange,
    },
    icon: {
      marginLeft: '2em',
      [theme.breakpoints.down('sm')]: {
        marginLeft: '0px',
      },
    },
    revolutionCard: {
      position: 'absolute',
      boxShadow: theme.shadows[10],
      borderRadius: '15px',
      padding: '10em',
      margin: '0 5em',
      [theme.breakpoints.down('md')]: {
        padding: '10em 5em',
      },
      [theme.breakpoints.down('sm')]: {
        paddingTop: '8em',
        paddingBottom: '8em',
        paddingLeft: 0,
        paddingRight: 0,
        borderRadius: 0,
        width: '100%',
        margin: 0,
      },
    },
    informationBlock: {
      position: 'absolute',
    },
  };
};
