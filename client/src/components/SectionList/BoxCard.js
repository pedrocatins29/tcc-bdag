/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {BoxView, ImageStore, TextStore} from './styles';
import {styles} from '../../StyleSheetGlobal';

const BoxCard = ({name, image, navigation, data}) => {
  return (
    <BoxView
      onPress={() =>
        navigation.navigate('ProductList', {
          name: name,
          data,
        })
      }
      style={styles.shadow}>
      <ImageStore
        resizeMode="cover"
        source={{
          uri: image,
        }}
      />

      <TextStore>{name}</TextStore>
    </BoxView>
  );
};

export default BoxCard;
