import React from 'react';
import {View, Text, Pressable} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {RoundedPressable} from './Fab.styles';

const Fab = ({navigation}) => {
  return (
    <RoundedPressable
      style={{borderRadius: 75}}
      onPress={() =>
        navigation.navigate('AddProduct', {name: 'Adicionar produto'})
      }>
      <FontAwesome5 name="plus" size={18} solid color="#282828" />
    </RoundedPressable>
  );
};

export default Fab;
