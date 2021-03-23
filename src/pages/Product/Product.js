import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {useHeaderHeight} from '@react-navigation/stack';
import {Container} from '../../GlobalStyles';
import {
  CardView,
  CategoryText,
  Line,
  CustomProductDescription,
} from './Product.styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  ProductDescription,
  ProductDescriptionContainer,
  ProductName,
  ProductNameRowFlex,
  ProductPrice,
} from '../../components/SectionList/styles';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';

const Product = ({route}) => {
  const headerHeight = useHeaderHeight();
  const {
    name,
    price,
    category,
    store,
    description,
    images,
    phone,
    address,
  } = route.params;
  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingTop: headerHeight}}>
      <ImageCarousel images={images} />
      <CardView>
        <CategoryText>{category}</CategoryText>
        <ProductNameRowFlex style={style.marginBot}>
          <ProductName screen={true}>{name}</ProductName>
          <ProductPrice screen={true}>{price}</ProductPrice>
        </ProductNameRowFlex>
        <Line style={style.marginBot} />
        <ProductDescriptionContainer>
          <CustomProductDescription style={style.marginBot}>
            {description}
          </CustomProductDescription>
        </ProductDescriptionContainer>
        <ProductDescriptionContainer style={style.marginBot}>
          <FontAwesome5 name="store" size={18} solid color="#282828" />
          <ProductDescription screen={true}>{store}</ProductDescription>
        </ProductDescriptionContainer>
        <ProductDescriptionContainer style={style.marginBot}>
          <FontAwesome5 name="whatsapp" size={22} solid color="#282828" />
          <ProductDescription screen={true}>{phone}</ProductDescription>
        </ProductDescriptionContainer>
        <ProductDescriptionContainer style={style.marginBot}>
          <FontAwesome5 name="map-pin" size={22} solid color="#282828" />
          <ProductDescription screen={true}>{address}</ProductDescription>
        </ProductDescriptionContainer>
      </CardView>
    </View>
  );
};

const style = StyleSheet.create({
  marginBot: {
    marginBottom: 8,
  },
});

export default Product;
