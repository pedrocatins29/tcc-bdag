import React from 'react';
import {TitleText} from '../../GlobalStyles';
import {ViewCem} from './styles';
import {View} from 'react-native';

const Section = ({CardItem, data, title, horizontal = false}) => {
  return (
    <>
      <TitleText>{title}</TitleText>
      {horizontal ? (
        <ViewCem>
          {data.map((item) => {
            return <CardItem {...item} />;
          })}
        </ViewCem>
      ) : (
        data.map((item) => {
          return <CardItem {...item} />;
        })
      )}
    </>
  );
};

export default Section;
