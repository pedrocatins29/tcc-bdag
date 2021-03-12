import React from 'react';
import {View, Text} from 'react-native';
import {
  CardView,
  ProductName,
  ProductPrice,
  ProductDescription,
  ImageStore,
  ImageContainer,
} from './styles';
import {RowFlex} from '../../GlobalStyles';

const Card = () => {
  return (
    <CardView
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
      <RowFlex>
        <ImageContainer>
          <ImageStore
            source={{
              uri:
                'https://feiralivre.com/assets/uploads/produtos/comu-132eec.jpg',
            }}
          />
        </ImageContainer>
        <RowFlex style={{flex: 2}}>
          <ProductName>Alface crespa</ProductName>
          <ProductPrice>4,99</ProductPrice>
        </RowFlex>
      </RowFlex>

      <ProductDescription>Verduras</ProductDescription>
      <ProductDescription>Cantina do zé</ProductDescription>
      <ProductDescription>
        Um dos melhores alfaces de toda a regiao 100% organico
      </ProductDescription>
    </CardView>
  );
};

export default Card;
