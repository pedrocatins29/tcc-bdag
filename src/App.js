import React from 'react';
import Home from './pages/Home/Home';
import {ThemeProvider} from 'styled-components';
import ProductList from './pages/ProductList/ProductList';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const App = () => {
  const theme = {
    bg: '#F5F5F5',
    white: '#FFFFFF',
    green: '#ADC178',
    text: '#282828',
    font: {
      'x-sm': '12px',
      sm: '14px',
      md: '18px',
      lg: '22px',
      'x-lg': '26px',
    },
  };

  const Stack = createStackNavigator();

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ProductList"
            options={({route}) => ({
              title: route.params.name,
              headerTransparent: true,
              headerTitleAlign: 'center',
              headerTintColor: '#282828',
              headerTitleStyle: {
                fontFamily: 'Inter-Regular',
              },
            })}
            component={ProductList}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
