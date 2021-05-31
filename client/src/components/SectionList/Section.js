import React from 'react';
import {TitleText} from '../../GlobalStyles';

import {ViewCem} from './styles';

const Section = ({CardItem, title, horizontal = false, navigation, data}) => {
  return (
    <>
      <TitleText>{title}</TitleText>
      {horizontal ? (
        <ViewCem>
          {data?.map(item => {
            return <CardItem navigation={navigation} {...item} data={data} />;
          })}
        </ViewCem>
      ) : (
        data?.map(item => {
          return <CardItem navigation={navigation} {...item} data={data} />;
        })
      )}
    </>
  );
};

export default Section;
