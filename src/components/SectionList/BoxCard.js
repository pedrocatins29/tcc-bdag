/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {BoxView, ImageContainer, ImageStore, TextStore} from './styles';

const BoxCard = ({storeName, imageUri}) => {
  return (
    <BoxView
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
      }}>
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
