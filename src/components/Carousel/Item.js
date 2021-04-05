import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Container, ItemText} from './styles';
import {Pressable} from 'react-native';

const Item = ({title, icon = false, color, setSelectedItem, selected}) => {
  return (
    <Pressable onPress={() => setSelectedItem(title)}>
      <Container>
        {icon ? (
          <FontAwesome5 name={icon} size={28} solid color={color} />
        ) : null}
        <ItemText selected={selected}>{title}</ItemText>
      </Container>
    </Pressable>
  );
};

export default Item;
