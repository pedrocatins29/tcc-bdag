/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Container, RowFlex} from '../../GlobalStyles';
import {
  City,
  SearchBar,
  CityRowFlex,
  SearchBarContainer,
  SignUpPressable,
  SignUpText,
} from './Home.styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Carrosel from '../../components/Carrosel/Carrosel';
import BoxCard from '../../components/SectionList/BoxCard';
import Section from '../../components/SectionList/Section';
import Card from '../../components/SectionList/Card';
import {ScrollView} from 'react-native';

const Home = ({navigation}) => {
  const [search, setSearch] = useState('');

  const carroselData = [
    {
      id: '1',
      title: 'Alface',
      icon: 'pepper-hot',
      color: '#BB112A',
    },
    {
      id: '2',
      title: 'Pimenta',
      icon: 'pepper-hot',
      color: '#BB112A',
    },
    {
      id: '3',
      title: 'Cenoura',
      icon: 'carrot',
      color: '#ED9121',
    },
    {
      id: '4',
      title: 'Maca',
      icon: 'apple-alt',
      color: '#BA0C2E',
    },
    {
      id: '5',
      title: 'Limao',
      icon: 'lemon',
      color: '#fff700',
    },
  ];

  const lojas = [
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
      storeName: 'Cogumelado',
    },
    {
      key: '3',
      imageUri:
        'https://cdn-cosmos.bluesoft.com.br/suppliers/supplier_27137689000157.png',
      storeName: 'Companhia dos fermentados',
    },
  ];

  const produtos = [
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
      imageUri: 'http://pngimg.com/uploads/tomato/tomato_PNG12567.png',
      productName: 'Tomate',
      productDescription: 'Tomatinho gostoso hmm',
      productStore: `pedrola's`,
      productPrice: '29,99/Saco',
      productCategory: 'Verduras',
    },
  ];

  return (
    <ScrollView style={{flex: 1}}>
      <Container>
        <CityRowFlex>
          <RowFlex>
            <City>Pompeia</City>
            <Icon name="arrow-up" size={18} color="#ADC178" />
          </RowFlex>
          <Icon name="sign-out" size={22} color="#282828" />
        </CityRowFlex>
        <SearchBarContainer
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
          <Icon
            name="search"
            size={22}
            style={{
              position: 'absolute',
              left: 12,
            }}
            color="#282828"
          />
          <Icon
            style={{position: 'absolute', right: 12}}
            name="filter"
            size={22}
            color="#282828"
          />
          <SearchBar value={search} onChangeText={(text) => setSearch(text)} />
        </SearchBarContainer>

        <Carrosel data={carroselData} />
        <Section
          navigation={navigation}
          CardItem={BoxCard}
          data={lojas}
          title="Lojas"
          horizontal={true}
        />
        <Section CardItem={Card} data={produtos} title="Produtos em destaque" />

        <SignUpPressable onPress={() => console.log('aaa')}>
          <SignUpText>Comece a vender seus produtos aqui +</SignUpText>
        </SignUpPressable>
      </Container>
    </ScrollView>
  );
};

export default Home;
