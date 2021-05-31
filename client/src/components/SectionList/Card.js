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
import {styles} from '../../StyleSheetGlobal';

const Card = ({
  name,
  price,
  category,
  store,
  description,
  image,
  navigation,
  address,
  phone,
}) => {
  console.log(category.title);
  return (
    <CardView
      onPress={() =>
        navigation.navigate('Product', {
          name,
          price,
          category,
          store,
          description,
          image,
          address,
          phone,
        })
      }
      style={styles.shadow}>
      <ImageContainer>
        <ImageStore
          source={{
            uri: image[0] || products.image[0],
          }}
        />
      </ImageContainer>
      <ProductDetailsContainer>
        <ProductNameRowFlex>
          <ProductName>{name}</ProductName>
          <ProductPrice>{price}</ProductPrice>
        </ProductNameRowFlex>
        <ProductDescriptionContainer>
          <FontAwesome5 name="store" size={12} solid color="#282828" />
          <ProductDescription>{category.title}</ProductDescription>
        </ProductDescriptionContainer>
        <ProductDescriptionContainer>
          <FontAwesome5 name="store" size={12} solid color="#282828" />
          <ProductDescription>{store.name}</ProductDescription>
        </ProductDescriptionContainer>

        <ProductDescription>{description}</ProductDescription>
      </ProductDetailsContainer>
    </CardView>
  );
};

export default Card;
