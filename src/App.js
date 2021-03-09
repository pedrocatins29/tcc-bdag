import React from 'react';
import Home from './pages/Home/Home';
import {ThemeProvider} from 'styled-components';

const App = () => {
  const theme = {
    bg: '#F5F5F5',
  };

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
