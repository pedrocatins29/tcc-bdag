import React from 'react';
import {FlatList} from 'react-native';
import Item from './Item';
import {FlexSafeAreaView} from './styles';

const DATA = [
  {
    id: '1',
    title: 'Alface',
    icon: 'pepper-hot',
    color: '#BB112A',
  },
  {
    id: '2',
    title: 'Pimenta',
    icon: 'pepper-hot',
    color: '#BB112A',
  },
  {
    id: '3',
    title: 'Cenoura',
    icon: 'carrot',
    color: '#ED9121',
  },
  {
    id: '4',
    title: 'Maca',
    icon: 'apple-alt',
    color: '#BA0C2E',
  },
  {
    id: '5',
    title: 'Limao',
    icon: 'lemon',
    color: '#fff700',
  },
];

const Carrosel = () => {
  const renderItem = ({item}) => (
    <Item title={item.title} icon={item.icon} color={item.color} />
  );

  return (
    <FlexSafeAreaView>
      <FlatList
        horizontal={true}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </FlexSafeAreaView>
  );
};

export default Carrosel;
