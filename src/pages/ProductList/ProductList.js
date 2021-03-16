import React, {useRef} from 'react';
import {View, Text} from 'react-native';
import Section from '../../components/SectionList/Section';
import Card from '../../components/SectionList/Card';
import Carrosel from '../../components/Carrosel/Carrosel';
import {Container} from '../../GlobalStyles';
import {useHeaderHeight} from '@react-navigation/stack';

const ProductList = () => {
  const headerHeight = useHeaderHeight();

  const data = [
    {
      category: 'Alface',
      products: [
        {
          key: '5',
          imageUri:
            'https://feiralivre.com/assets/uploads/produtos/comu-132eec.jpg',
          productName: 'Alface Crespa',
          productDescription:
            'Um dos melhores alfaces de toda a regiao 100% organico',
          productStore: 'Loja do pedrao',
          productPrice: '4,99/Kg',
          productCategory: 'Verduras',
        },
      ],
    },
    {
      category: 'Tomate',
      products: [
        {
          key: '8',
          imageUri: 'http://pngimg.com/uploads/tomato/tomato_PNG12567.png',
          productName: 'Tomate',
          productDescription: 'Tomatinho gostoso hmm',
          productStore: `pedrola's`,
          productPrice: '29,99/Saco',
          productCategory: 'Verduras',
        },
      ],
    },
  ];

  const carroselData = [
    {
      id: '1',
      title: 'Alface',
    },
    {
      id: '2',
      title: 'Pimenta',
    },
    {
      id: '3',
      title: 'Cenoura',
    },
    {
      id: '4',
      title: 'Maca',
    },
    {
      id: '5',
      title: 'Limao',
    },
  ];

  return (
    <Container style={{paddingTop: headerHeight}}>
      <Carrosel data={carroselData} />
      {data.map((item, index) => {
        return (
          <View key={index}>
            <Section
              CardItem={Card}
              title={item.category}
              data={item.products}
            />
          </View>
        );
      })}
    </Container>
  );
};

export default ProductList;
