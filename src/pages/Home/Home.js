/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Container, RowFlex} from '../../GlobalStyles';
import {City, SearchBar, CityRowFlex} from './Home.styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Carrosel from '../../components/Carrosel/Carrosel';
import BoxCard from '../../components/SectionList/BoxCard';
import Section from '../../components/SectionList/Section';
import Card from '../../components/SectionList/Card';
import {ScrollView} from 'react-native';

const Home = () => {
  const lojas = [
    {
      title: 'Lojas',
      horizontal: true,
      data: [
        {
          key: '1',
          imageUri:
            'https://cdn-cosmos.bluesoft.com.br/suppliers/supplier_27137689000157.png',
          storeName: 'Companhia dos fermentados',
        },
        {
          key: '2',
          imageUri:
            'https://cdn-images-1.medium.com/max/1200/1*Jqncsxz85sX6HVxcywb_pw.jpeg',
          storeName: 'Companhia dos fermentados',
        },
        {
          key: '3',
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
        {
          key: '6',
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
          key: '7',
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
          key: '8',
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
          key: '9',
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
          key: '10',
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
          key: '11',
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
      <Section CardItem={Card} DATA={produtos} />
      {/* <Section CardItem={BoxCard} DATA={lojas} /> */}
    </Container>
  );
};

export default Home;
