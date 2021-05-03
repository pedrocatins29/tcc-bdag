import React from 'react';
import {View, Text, Pressable} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {RoundedPressable} from './Fab.styles';

const Fab = ({navigation, icon}) => {
  return (
    <RoundedPressable
      style={{borderRadius: 36}}
      onPress={() =>
        navigation.navigate('AddProduct', {name: 'Adicionar produto'})
      }>
      <FontAwesome5 name={icon} size={18} solid color="#FFFFFF" />
    </RoundedPressable>
  );
};

export default Fab;
