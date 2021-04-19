import React from 'react';
import {TitleText} from '../../GlobalStyles';
import {ViewCem} from './styles';

const Section = ({CardItem, data, title, horizontal = false, navigation}) => {
  return (
    <>
      <TitleText>{title}</TitleText>
      {horizontal ? (
        <ViewCem>
          {data.map((item) => {
            return <CardItem navigation={navigation} {...item} />;
          })}
        </ViewCem>
      ) : (
        data.map((item) => {
          return <CardItem navigation={navigation} {...item} />;
        })
      )}
    </>
  );
};

export default Section;
