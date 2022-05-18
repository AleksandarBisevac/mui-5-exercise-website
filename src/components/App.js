import Header from './ui/Header/Header';
import theme from '../styles/jss/themes/AppTheme';
import { ThemeProvider } from '@mui/system';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      Hello
    </ThemeProvider>
  );
}

export default App;
