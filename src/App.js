import React from 'react';
import Home from './components/Home/Home';
import {ThemeProvider} from 'styled-components';

const App = () => {
  const theme = {
    bg: '#191a24',
  };

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
