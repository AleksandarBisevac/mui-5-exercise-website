import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/system';
import Header from './ui/Header/Header';
import Footer from './ui/Footer/Footer';
import theme from '../styles/jss/themes/AppTheme';
import LandingPage from './LandingPage';

function App() {
  const [selectedIndex, setSelectedIndex] = React.useState(undefined);
  const [tabValue, setTabValue] = React.useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Header
        tabValue={tabValue}
        setTabValue={setTabValue}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route
          exact
          path='/services'
          element={
            <div>
              <span>services</span>
            </div>
          }
        />
        <Route
          exact
          path='/customsoftware'
          element={
            <div>
              <span>customsoftware</span>
            </div>
          }
        />
        <Route
          exact
          path='/mobileapps'
          element={
            <div>
              <span>mobileapps</span>
            </div>
          }
        />
        <Route
          exact
          path='/websites'
          element={
            <div>
              <span>websites</span>
            </div>
          }
        />
        <Route
          exact
          path='/revolution'
          element={
            <div>
              <span>revolution</span>
            </div>
          }
        />
        <Route
          exact
          path='/about'
          element={
            <div>
              <span>about</span>
            </div>
          }
        />
        <Route
          exact
          path='/contact'
          element={
            <div>
              <span>contact</span>
            </div>
          }
        />
        <Route
          exact
          path='/estimate'
          element={
            <div>
              <span>estimate</span>
            </div>
          }
        />
      </Routes>
      <Footer
        tabValue={tabValue}
        setTabValue={setTabValue}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
    </ThemeProvider>
  );
}

export default App;
