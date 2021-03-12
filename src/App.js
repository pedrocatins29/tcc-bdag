import React from 'react';
import Home from './pages/Home/Home';
import {ThemeProvider} from 'styled-components';

const App = () => {
  const theme = {
    bg: '#F5F5F5',
    white: '#FFFFFF',
    text: '#282828',
    fontSizes: {
      sm: '12px',
      md: '18px',
      lg: '26px',
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
