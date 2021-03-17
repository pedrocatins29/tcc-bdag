import React from 'react';
import {Image, StyleSheet} from 'react-native';
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
import {styles} from '../../StyleSheetGlobal';

const Product = ({route}) => {
  const headerHeight = useHeaderHeight();
  const {
    productName,
    productPrice,
    productCategory,
    productStore,
    productDescription,
    imageUri,
  } = route.params;
  return (
    <Container style={{paddingTop: headerHeight}}>
      <CardView style={styles.shadow}>
        <Image
          style={{width: '100%', aspectRatio: 1}}
          source={{
            uri: imageUri,
          }}
        />

        <CategoryText>{productCategory}</CategoryText>
        <ProductNameRowFlex style={style.marginBot}>
          <ProductName>{productName}</ProductName>
          <ProductPrice>{productPrice}</ProductPrice>
        </ProductNameRowFlex>
        <Line style={style.marginBot} />
        <ProductDescriptionContainer>
          <CustomProductDescription style={style.marginBot}>
            {productDescription}
          </CustomProductDescription>
        </ProductDescriptionContainer>
        <ProductDescriptionContainer style={style.marginBot}>
          <FontAwesome5 name="store" size={12} solid color="#282828" />
          <ProductDescription>{productStore}</ProductDescription>
        </ProductDescriptionContainer>
        <ProductDescriptionContainer style={style.marginBot}>
          <FontAwesome5 name="whatsapp" size={16} solid color="#282828" />
          <ProductDescription>981044341</ProductDescription>
        </ProductDescriptionContainer>
        <ProductDescriptionContainer style={style.marginBot}>
          <FontAwesome5 name="map-pin" size={16} solid color="#282828" />
          <ProductDescription>
            Rua Joaquim de almeida pina 158 - Flandria
          </ProductDescription>
        </ProductDescriptionContainer>
      </CardView>
    </Container>
  );
};

const style = StyleSheet.create({
  marginBot: {
    marginBottom: 8,
  },
});

export default Product;
