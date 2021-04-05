import {useHeaderHeight} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import {Container} from '../../GlobalStyles';

const AddProduct = () => {
  const headerHeight = useHeaderHeight();

  return (
    <Container style={{paddingTop: headerHeight}}>
      <Text>aaaa</Text>
    </Container>
  );
};

export default AddProduct;
