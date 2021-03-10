import React from 'react';
import {SafeAreaView, SectionList} from 'react-native';
import {TitleText} from '../../GlobalStyles';

const Section = ({CardItem, DATA}) => {
  return (
    <SafeAreaView>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item.storeName + index}
        renderItem={({item}) => <CardItem {...item} />}
        renderSectionHeader={({section: {title}}) => (
          <TitleText>{title}</TitleText>
        )}
      />
    </SafeAreaView>
  );
};

export default Section;
