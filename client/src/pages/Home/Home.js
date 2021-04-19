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
  UserImage,
} from './Home.styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from '../../components/Carousel/Carousel';
import BoxCard from '../../components/SectionList/BoxCard';
import Section from '../../components/SectionList/Section';
import Card from '../../components/SectionList/Card';
import {ScrollView, Pressable} from 'react-native';
import {styles} from '../../StyleSheetGlobal';

const Home = ({navigation}) => {
  const [user, setUser] = useState(true);
  const [search, setSearch] = useState('');

  const carouselData = [
    {
      id: '1',
      title: 'Verduras',
      icon: 'envira',
      color: '#0F8946',
    },
    {
      id: '3',
      title: 'Temperos',
      icon: 'mortar-pestle',
      color: '#ED9121',
    },
    {
      id: '4',
      title: 'Frutas',
      icon: 'apple-alt',
      color: '#BA0C2E',
    },
    {
      id: '2',
      title: 'Legumes',
      icon: 'seedling',
      color: '#00E676',
    },
    {
      id: '5',
      title: 'Graõs',
      icon: 'circle',
      color: '#fea82f',
    },
    {
      id: '6',
      title: 'Outros',
      icon: 'dot-circle',
      color: '#282828',
    },
  ];

  const lojas = [
    {
      key: '1',
      image:
        'https://cdn-cosmos.bluesoft.com.br/suppliers/supplier_27137689000157.png',
      name: 'Companhia dos fermentados',
    },
    {
      key: '2',
      image:
        'https://cdn-images-1.medium.com/max/1200/1*Jqncsxz85sX6HVxcywb_pw.jpeg',
      name: 'Cogumelado',
    },
    {
      key: '3',
      image:
        'https://cdn-cosmos.bluesoft.com.br/suppliers/supplier_27137689000157.png',
      name: 'Companhia dos fermentados',
    },
  ];

  const produtos = [
    {
      key: '5',
      images: [
        {
          uri: 'https://feiralivre.com/assets/uploads/produtos/comu-132eec.jpg',
        },

        {
          uri:
            'https://www.casaorganica.eco.br/image/cache/catalog/produtos/Hortifruti/alface-crespa-organico-organic-bio-hortifruti-feira-verdura-salada-produto-natual-1000x1000.jpg',
        },
        {
          uri:
            'https://www.dicasdemulher.com.br/wp-content/uploads/2020/01/beneficios-do-alface-0.png',
        },
        {
          uri:
            'https://s2.glbimg.com/ApHItIfcVXeS4sgYnqD0HXAi-IU=/780x440/e.glbimg.com/og/ed/f/original/2018/03/26/food-3249037_1280.jpg',
        },
        {
          uri:
            'https://savegnago.vteximg.com.br/arquivos/ids/450968-600-600/ALFACE-AMERICANA-LA-VITA-250G-PACOTE-FAT.jpg?v=637435752341370000',
        },
      ],
      name: 'Alface Crespa',
      description: 'Um dos melhores alfaces de toda a regiao 100% organico',
      store: 'Loja do pedrao',
      price: '4,99/Kg',
      category: 'Verduras',
      phone: '981044341',
      address: 'Rua Joaquim de almeida pina 158 - Flandria',
    },
    {
      key: '6',
      images: [
        {
          uri:
            'https://images-na.ssl-images-amazon.com/images/I/51jqI%2BrGQQL.jpg',
        },

        {
          uri:
            'https://www.jessicagavin.com/wp-content/uploads/2019/02/carrots-7-1200.jpg',
        },
        {
          uri:
            'https://media.healthyfood.com/wp-content/uploads/2019/07/The-lost-plot-growing-carrots-iStock-471680420.jpg',
        },
        {
          uri:
            'https://assets.sainsburys-groceries.co.uk/gol/6860386/1/640x640.jpg',
        },
      ],
      name: 'Cenoura',
      description: 'Cenoura mais verde de todo o velho oeste',
      store: 'Carrots and Cia',
      price: '2,99/Kg',
      category: 'Verduras',
      phone: '981044341',
      address: 'Rua das verduras 158 - Flandria',
    },
    {
      key: '8',
      images: [
        {
          uri:
            'https://img.freepik.com/fotos-gratis/um-tomate-vermelho-fresco-isolado-no-branco_1205-548.jpg?size=626&ext=jpg',
        },

        {
          uri:
            'https://uploads.metropoles.com/wp-content/uploads/2019/03/18162119/WhatsApp-Image-2019-03-18-at-16.16.25.jpeg',
        },
        {
          uri:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc7R_NKLJvHSuhoAhEBPWyiT9yvwJFavobRg&usqp=CAU',
        },
      ],
      name: 'Tomate',
      description: 'Tomatinho gostoso hmm',
      store: `pedrola's`,
      price: '29,99/Saco',
      category: 'Verduras',
      phone: '981044341',
      address: 'Rua teste - Flandria',
    },
  ];

  return (
    <ScrollView style={{flex: 1}}>
      <Container>
        <CityRowFlex>
          <RowFlex>
            {user ? (
              <Pressable onPress={() => console.log('go to user profile')}>
                <UserImage
                  source={{
                    uri:
                      'https://cdn-cosmos.bluesoft.com.br/suppliers/supplier_27137689000157.png',
                  }}
                />
              </Pressable>
            ) : null}

            <RowFlex>
              <City>Pompeia</City>
              <Icon name="arrow-up" size={18} color="#ADC178" />
            </RowFlex>
          </RowFlex>
          <Icon name="sign-out" size={22} color="#282828" />
        </CityRowFlex>
        <SearchBarContainer style={styles.shadow}>
          <Pressable
            style={{
              position: 'absolute',
              left: 12,
            }}>
            <Icon name="search" size={22} color="#282828" />
          </Pressable>
          <Icon
            style={{position: 'absolute', right: 12}}
            name="filter"
            size={22}
            color="#282828"
          />
          <SearchBar value={search} onChangeText={text => setSearch(text)} />
        </SearchBarContainer>

        <Carousel data={carouselData} />
        <Section
          navigation={navigation}
          CardItem={BoxCard}
          data={lojas}
          title="Lojas"
          horizontal={true}
        />
        <SignUpPressable
          onPress={() => navigation.navigate('Register', {name: 'Cadastro'})}>
          <SignUpText>Comece a vender seus produtos aqui +</SignUpText>
        </SignUpPressable>
        <Section
          navigation={navigation}
          CardItem={Card}
          data={produtos}
          title="Produtos em destaque"
        />
      </Container>
    </ScrollView>
  );
};

export default Home;
