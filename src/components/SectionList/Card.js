/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  CardView,
  ProductName,
  ProductPrice,
  ProductDescription,
  ImageStore,
  ImageContainer,
  ProductDetailsContainer,
  ProductNameRowFlex,
  ProductDescriptionContainer,
} from './styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Card = ({
  productName,
  productPrice,
  productCategory,
  productStore,
  productDescription,
  imageUri,
  navigation,
}) => {
  return (
    <CardView
      onPress={() =>
        navigation.navigate('Product', {
          productName,
          productPrice,
          productCategory,
          productStore,
          productDescription,
          imageUri,
          name: productName,
        })
      }
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
      <ImageContainer>
        <ImageStore
          source={{
            uri: imageUri,
          }}
        />
      </ImageContainer>
      <ProductDetailsContainer>
        <ProductNameRowFlex>
          <ProductName>{productName}</ProductName>
          <ProductPrice>{productPrice}</ProductPrice>
        </ProductNameRowFlex>
        <ProductDescriptionContainer>
          <FontAwesome5 name="store" size={12} solid color="#282828" />
          <ProductDescription>{productCategory}</ProductDescription>
        </ProductDescriptionContainer>
        <ProductDescriptionContainer>
          <FontAwesome5 name="store" size={12} solid color="#282828" />
          <ProductDescription>{productStore}</ProductDescription>
        </ProductDescriptionContainer>

        <ProductDescription>{productDescription}</ProductDescription>
      </ProductDetailsContainer>
    </CardView>
  );
};

export default Card;
