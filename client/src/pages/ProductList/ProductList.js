import React, {useRef} from 'react';
import {View, Text} from 'react-native';
import Section from '../../components/SectionList/Section';
import Card from '../../components/SectionList/Card';
import Carousel from '../../components/Carousel/Carousel';
import {Container} from '../../GlobalStyles';
import {useHeaderHeight} from '@react-navigation/stack';
import Fab from '../../components/Fab/Fab';

const ProductList = ({navigation, route}) => {
  const headerHeight = useHeaderHeight();

  const {data} = route.params;

  // console.log();

  console.log(JSON.stringify(data, null, 4));

  // const data = [
  //   {
  //     category: 'Alface',
  //     products: [
  //       {
  //         key: '10',
  //         images: [
  //           {
  //             uri:
  //               'https://feiralivre.com/assets/uploads/produtos/comu-132eec.jpg',
  //           },

  //           {
  //             uri:
  //               'https://www.casaorganica.eco.br/image/cache/catalog/produtos/Hortifruti/alface-crespa-organico-organic-bio-hortifruti-feira-verdura-salada-produto-natual-1000x1000.jpg',
  //           },
  //           {
  //             uri:
  //               'https://www.dicasdemulher.com.br/wp-content/uploads/2020/01/beneficios-do-alface-0.png',
  //           },
  //           {
  //             uri:
  //               'https://s2.glbimg.com/ApHItIfcVXeS4sgYnqD0HXAi-IU=/780x440/e.glbimg.com/og/ed/f/original/2018/03/26/food-3249037_1280.jpg',
  //           },
  //           {
  //             uri:
  //               'https://savegnago.vteximg.com.br/arquivos/ids/450968-600-600/ALFACE-AMERICANA-LA-VITA-250G-PACOTE-FAT.jpg?v=637435752341370000',
  //           },
  //         ],
  //         name: 'Alface Crespa',
  //         description: 'Um dos melhores alfaces de toda a regiao 100% organico',
  //         store: 'Da Tribo',
  //         price: 'R$4,99/Kg',
  //         category: 'Verduras',
  //         phone: '981044341',
  //         address: 'Rua Joaquim de almeida pina 158 - Flandria',
  //       },
  //     ],
  //   },
  //   {
  //     category: 'Tomate',
  //     products: [
  //       {
  //         key: '11',
  //         images: [
  //           {
  //             uri: 'https://pngimg.com/uploads/tomato/tomato_PNG12511.png',
  //           },

  //           {
  //             uri:
  //               'https://www.jessicagavin.com/wp-content/uploads/2019/02/carrots-7-1200.jpg',
  //           },
  //           {
  //             uri:
  //               'https://media.healthyfood.com/wp-content/uploads/2019/07/The-lost-plot-growing-carrots-iStock-471680420.jpg',
  //           },
  //           {
  //             uri:
  //               'https://assets.sainsburys-groceries.co.uk/gol/6860386/1/640x640.jpg',
  //           },
  //         ],
  //         name: 'Tomate',
  //         description: 'Tomate mais vermelho que você encontra na região',
  //         store: 'Da Tribo',
  //         price: 'R$2,99/Kg',
  //         category: 'Verduras',
  //         phone: '981044341',
  //         address: 'Rua das verduras 158 - Flandria',
  //       },
  //     ],
  //   },
  // ];

  const carouselData = [
    {
      id: '1',
      title: 'Verduras',
    },
    {
      id: '2',
      title: 'Temperos',
    },
    {
      id: '3',
      title: 'Frutas',
    },
    {
      id: '4',
      title: 'Legumes',
    },
    {
      id: '5',
      title: 'Graõs',
    },
    {
      id: '6',
      title: 'Outros',
    },
  ];

  return (
    <Container style={{paddingTop: headerHeight}}>
      <Carousel data={carouselData} />
      {data.map((item, index) => {
        return (
          <View key={index}>
            <Section
              CardItem={Card}
              title={item.category}
              data={item.products}
              navigation={navigation}
            />
          </View>
        );
      })}
      <Fab navigation={navigation} icon="plus" />
    </Container>
  );
};

export default ProductList;
