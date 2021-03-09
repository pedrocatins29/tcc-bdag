import React from 'react';
import {Container, RowFlex} from '../../GlobalStyles';
import {City, SearchBar} from './Home.styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Carrosel from '../../components/Carrosel/Carrosel';

const Home = () => {
  return (
    <Container>
      <RowFlex>
        <City>alo alo?</City>
        <Icon name="arrow-up" size={18} color="#ADC178" />
        <Icon name="sign-out" size={18} color="#282828" />
      </RowFlex>
      <SearchBar>
        <Icon name="search" size={18} color="#282828" />
        <Icon name="filter" size={18} color="#282828" />
      </SearchBar>
      <Carrosel />
    </Container>
  );
};

export default Home;
