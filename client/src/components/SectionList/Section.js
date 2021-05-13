import React from 'react';
import {TitleText} from '../../GlobalStyles';
import useApi from '../../hooks/useApi';
import {ViewCem} from './styles';

const Section = ({CardItem, title, horizontal = false, navigation}) => {
  const {data} = useApi('/stores', 'storesData');

  return (
    <>
      <TitleText>{title}</TitleText>
      {horizontal ? (
        <ViewCem>
          {data?.map(item => {
            return <CardItem navigation={navigation} {...item} />;
          })}
        </ViewCem>
      ) : (
        data?.map(item => {
          return <CardItem navigation={navigation} {...item} />;
        })
      )}
    </>
  );
};

export default Section;
