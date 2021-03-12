/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Container, RowFlex} from '../../GlobalStyles';
import {City, SearchBar} from './Home.styles';
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

  return (
    <Container>
      <RowFlex>
        <RowFlex>
          <City>Pompeia</City>
          <Icon name="arrow-up" size={18} color="#ADC178" />
        </RowFlex>
        <Icon name="sign-out" size={18} color="#282828" />
      </RowFlex>
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
      {/* <Section CardItem={BoxCard} DATA={lojas} /> */}
      <Card />
    </Container>
  );
};

export default Home;
