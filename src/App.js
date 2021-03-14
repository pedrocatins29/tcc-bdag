import React from 'react';
import Home from './pages/Home/Home';
import {ThemeProvider} from 'styled-components';
import ProductList from './pages/ProductList/ProductList';

const App = () => {
  const theme = {
    bg: '#F5F5F5',
    white: '#FFFFFF',
    text: '#282828',
    green: '#ADC178',
    fontSizes: {
      'x-sm': '12px',
      sm: '14px',
      md: '18px',
      lg: '22px',
      'x-lg': '26px',
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <ProductList />
    </ThemeProvider>
  );
};

export default App;
