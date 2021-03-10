import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Container, ItemText} from './styles';

const Item = ({title, icon, color}) => (
  <Container>
    <FontAwesome5 name={icon} size={24} solid color={color} />
    <ItemText>{title}</ItemText>
  </Container>
);

export default Item;
