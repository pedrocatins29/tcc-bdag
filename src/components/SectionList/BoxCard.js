/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {BoxView, ImageStore, TextStore} from './styles';
import {styles} from '../../StyleSheetGlobal';

const BoxCard = ({storeName, imageUri, navigation}) => {
  return (
    <BoxView
      onPress={() =>
        navigation.navigate('ProductList', {
          name: storeName,
        })
      }
      style={styles.shadow}>
      <ImageStore
        resizeMode="cover"
        source={{
          uri: imageUri,
        }}
      />

      <TextStore>{storeName}</TextStore>
    </BoxView>
  );
};

export default BoxCard;
