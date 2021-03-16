import React, {useState} from 'react';
import {FlatList} from 'react-native';
import Item from './Item';
import {FlexSafeAreaView} from './styles';

const Carrosel = ({data}) => {
  const [selectedItem, setSelectedItem] = useState();

  return (
    <FlexSafeAreaView>
      <FlatList
        horizontal={true}
        data={data}
        renderItem={({item}) => (
          <Item
            title={item.title}
            selected={selectedItem === item.title ? true : false}
            setSelectedItem={setSelectedItem}
            icon={item.icon}
            color={item.color}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </FlexSafeAreaView>
  );
};

export default Carrosel;
