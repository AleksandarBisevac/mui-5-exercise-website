import { withTheme } from '@emotion/react';
import { styled } from '@mui/material';

export const LandingWrapper = styled(withTheme('div'))((props) => ({}));

export const BackgroundDiv = styled(withTheme('div'))(
  ({ theme, background, mobileBackground, attachment }) => ({
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: attachment,
    height: '100%',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      backgroundImage: mobileBackground ? mobileBackground : background,
    },
  })
);
