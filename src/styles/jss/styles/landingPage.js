import { withTheme } from '@emotion/react';
import { styled } from '@mui/material';

//assets/repeatingBackground.svg';
export const LandingWrapper = styled(withTheme('div'))((props) => ({}));

export const BackgroundDiv = styled(withTheme('div'))((props) => ({
  backgroundImage: `url(${props.background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: '100%',
  width: '100%',
}));
