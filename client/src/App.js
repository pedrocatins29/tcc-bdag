import React from 'react';
import Home from './pages/Home/Home';
import {ThemeProvider} from 'styled-components';
import ProductList from './pages/ProductList/ProductList';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Product from './pages/Product/Product';
import Register from './pages/Register/Register';
import AddProduct from './pages/AddProduct/AddProduct';
import {QueryClientProvider, QueryClient} from 'react-query';

const App = () => {
  const theme = {
    bg: '#F5F5F5',
    white: '#FFFFFF',
    green: '#00E676',
    text: '#282828',
    font: {
      xxxsm: '10px',
      xxsm: '12px',
      xsm: '14px',
      sm: '16px',
      md: '18px',
      lg: '20px',
      xlg: '22px',
      xxlg: '24px',
      xxxlg: '26px',
    },
  };

  const Stack = createStackNavigator();
  const queryClient = new QueryClient();

  const headerOptions = ({route}) => {
    return {
      title: route.params.name,
      headerTransparent: true,
      headerTitleAlign: 'center',
      headerTintColor: '#282828',
      headerTitleStyle: {
        fontFamily: 'Inter-Regular',
      },
    };
  };

  return (
    <QueryClientProvider client={queryClient}>
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
              options={headerOptions}
              component={ProductList}
            />
            <Stack.Screen
              name="Product"
              component={Product}
              options={headerOptions}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={headerOptions}
            />
            <Stack.Screen
              name="AddProduct"
              component={AddProduct}
              options={headerOptions}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
