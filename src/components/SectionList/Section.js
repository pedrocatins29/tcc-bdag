import React from 'react';
import {SafeAreaView, SectionList, FlatList, Dimensions} from 'react-native';
import {TitleText} from '../../GlobalStyles';
import {ViewCem} from './styles';

const Section = ({CardItem, DATA}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <SafeAreaView>
      <SectionList
        stickySectionHeadersEnabled={false}
        sections={DATA}
        keyExtractor={(item, index) => item.storeName + item.key}
        renderSectionHeader={({section}) => (
          <>
            <TitleText>{section.title}</TitleText>
            {section.horizontal ? (
              <FlatList
                horizontal={true}
                keyExtractor={(item) => item.key}
                data={section.data}
                renderItem={({item}) => <CardItem {...item} />}
                showsHorizontalScrollIndicator={false}
              />
            ) : null}
          </>
        )}
        renderItem={({item, section}) => {
          if (section.horizontal) {
            return null;
          }
          return <CardItem {...item} />;
        }}
      />
    </SafeAreaView>
  );
};

export default Section;
