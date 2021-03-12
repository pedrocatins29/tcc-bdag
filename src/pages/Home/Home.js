/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Container, RowFlex} from '../../GlobalStyles';
import {City, SearchBar, CityRowFlex} from './Home.styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Carrosel from '../../components/Carrosel/Carrosel';
import BoxCard from '../../components/SectionList/BoxCard';
import Section from '../../components/SectionList/Section';
import Card from '../../components/SectionList/Card';

const Home = () => {
  const lojas = [
    {
      title: 'Lojas',
      data: [
        {
          imageUri:
            'https://cdn-cosmos.bluesoft.com.br/suppliers/supplier_27137689000157.png',
          storeName: 'Companhia dos fermentados',
        },
        {
          imageUri:
            'https://cdn-images-1.medium.com/max/1200/1*Jqncsxz85sX6HVxcywb_pw.jpeg',
          storeName: 'Cogumelado',
        },
        {
          imageUri:
            'https://cdn-cosmos.bluesoft.com.br/suppliers/supplier_27137689000157.png',
          storeName: 'Companhia dos fermentados',
        },
      ],
    },
  ];

  const produtos = [
    {
      title: 'Produtos em destaque',
      data: [
        {
          imageUri:
            'https://feiralivre.com/assets/uploads/produtos/comu-132eec.jpg',
          productName: 'Alface Crespa',
          productDescription:
            'Um dos melhores alfaces de toda a regiao 100% organico',
          productStore: 'Loja do pedrao',
          productPrice: '4,99/Kg',
          productCategory: 'Verduras',
        },
        {
          imageUri:
            'https://feiralivre.com/assets/uploads/produtos/comu-132eec.jpg',
          storeName: 'Alface Crespa',
          productDescription:
            'Um dos melhores alfaces de toda a regiao 100% organico',
          productStore: 'Loja do pedrao',
          productPrice: '4,99/Kg',
          productCategory: 'Verduras',
        },
        {
          imageUri:
            'https://feiralivre.com/assets/uploads/produtos/comu-132eec.jpg',
          storeName: 'Alface Crespa',
          productDescription:
            'Um dos melhores alfaces de toda a regiao 100% organico',
          productStore: 'Loja do pedrao',
          productPrice: '4,99/Kg',
          productCategory: 'Verduras',
        },
      ],
    },
  ];

  return (
    <Container>
      <CityRowFlex>
        <RowFlex>
          <City>Pompeia</City>
          <Icon name="arrow-up" size={18} color="#ADC178" />
        </RowFlex>
        <Icon name="sign-out" size={18} color="#282828" />
      </CityRowFlex>
      <SearchBar
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
        <Icon name="search" size={18} color="#282828" />
        <Icon name="filter" size={18} color="#282828" />
      </SearchBar>
      <Carrosel />
      <Section CardItem={BoxCard} DATA={lojas} />
      {/* <Section CardItem={Card} DATA={produtos} /> */}
      <Card
        productName={produtos[0].data[0].productName}
        productPrice={produtos[0].data[0].productPrice}
        productCategory={produtos[0].data[0].productCategory}
        productStore={produtos[0].data[0].productStore}
        productDescription={produtos[0].data[0].productDescription}
        imageUri={produtos[0].data[0].imageUri}
      />
      <Card
        productName={produtos[0].data[0].productName}
        productPrice={produtos[0].data[0].productPrice}
        productCategory={produtos[0].data[0].productCategory}
        productStore={produtos[0].data[0].productStore}
        productDescription={produtos[0].data[0].productDescription}
        imageUri={produtos[0].data[0].imageUri}
      />
    </Container>
  );
};

export default Home;
