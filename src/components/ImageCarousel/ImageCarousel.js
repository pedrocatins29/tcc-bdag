import React, {useRef, useState} from 'react';
import {View, StyleSheet, Dimensions, Platform} from 'react-native';
import Carousel, {ParallaxImage, Pagination} from 'react-native-snap-carousel';

const {width: screenWidth} = Dimensions.get('window');
const ImageCarousel = ({images}) => {
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          style={{width: '100%', aspectRatio: 1, resizeMode: 'cover'}}
          source={{
            uri: item.uri,
          }}
          containerStyle={styles.imageContainer}
          parallaxFactor={0.8}
          {...parallaxProps}
        />
      </View>
    );
  };

  return (
    <>
      <Carousel
        ref={carouselRef}
        data={images}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        hasParallaxImages={true}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={images.length}
        activeDotIndex={activeSlide}
        dotStyle={styles.dotStyle}
        inactiveDotStyle={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </>
  );
};

const styles = StyleSheet.create({
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: '#282828',
  },

  item: {
    flex: 1,
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}),
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});

export default ImageCarousel;
