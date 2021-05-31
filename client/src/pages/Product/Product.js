import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useHeaderHeight} from '@react-navigation/stack';
import {
  CardView,
  CategoryText,
  Line,
  CustomProductDescription,
} from './Product.styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fab from '../../components/Fab/Fab';
import {
  ProductDescription,
  ProductDescriptionContainer,
  ProductName,
  ProductNameRowFlex,
  ProductPrice,
} from '../../components/SectionList/styles';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';

const Product = ({route, navigation}) => {
  const headerHeight = useHeaderHeight();
  const {name, price, category, store, description, image} = route.params;
  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingTop: headerHeight}}>
      <ImageCarousel images={image} />
      <CardView>
        <CategoryText color={category.color}>{category.title}</CategoryText>
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
          <ProductDescription screen={true}>{store.name}</ProductDescription>
        </ProductDescriptionContainer>
        <ProductDescriptionContainer style={style.marginBot}>
          <FontAwesome5 name="whatsapp" size={22} solid color="#282828" />
          <ProductDescription screen={true}>
            {store.phoneNumber}
          </ProductDescription>
        </ProductDescriptionContainer>
        <ProductDescriptionContainer style={style.marginBot}>
          <FontAwesome5 name="map-pin" size={22} solid color="#282828" />
          <ProductDescription screen={true}>{store.address}</ProductDescription>
        </ProductDescriptionContainer>
      </CardView>
      <Fab navigation={navigation} icon="pen" />
    </View>
  );
};

const style = StyleSheet.create({
  marginBot: {
    marginBottom: 8,
  },
});

export default Product;
