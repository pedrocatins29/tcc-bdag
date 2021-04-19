import {useHeaderHeight} from '@react-navigation/stack';
import React, {useState} from 'react';
import {View, ScrollView, Image, Dimensions, StyleSheet} from 'react-native';
import {Container} from '../../GlobalStyles';
import {useForm} from 'react-hook-form';
import Input from '../../components/Register/Input';
import {
  AddMoreImages,
  ClearImage,
  ImagePickerContainer,
  SelectedImage,
  SelectedImageContainer,
} from './AddProduct.styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import SelectInput from '../../components/Input/SelectInput';

const {width: screenWidth} = Dimensions.get('window');

const AddProduct = () => {
  const headerHeight = useHeaderHeight();
  const {control, handleSubmit, errors} = useForm();
  const onSubmit = data => console.log(data);
  const [image, setImage] = useState();

  const itemsSelect = [
    {
      label: 'Orange',
      value: 'orange',
      key: 'orange',
      color: 'orange',
      inputLabel: 'Orange!',
    },
    {
      label: 'Orange',
      value: 'orange',
      key: 'orange1',
      color: 'orange',
      inputLabel: 'Orange!',
    },
  ];

  const inputs = [
    {name: 'Nome do produto', required: true},
    {name: 'Preço', required: true},
    // {name: '/Unidade', required: true},
    // {name: 'Categoria', required: true},
    {name: 'Descrição', required: true},
  ];

  const handleImagePicker = ({didCancel, uri, width, height}) => {
    if (didCancel) {
      console.log('Cancelou');
    } else if (uri) {
      setImage({
        width,
        height,
        uri,
      });
    }
  };

  const Fields = inputs.map((item, key) => {
    return (
      <Input
        key={key}
        control={control}
        errors={errors}
        name={item.name}
        required={item.required}
      />
    );
  });

  return (
    <ScrollView style={{flex: 1, paddingTop: headerHeight}}>
      <Container>
        {image ? (
          <SelectedImageContainer style={styles.item}>
            <ClearImage onPress={() => setImage(undefined)}>
              <FontAwesome5
                name="times-circle"
                size={32}
                regular
                color="#00E676"
              />
            </ClearImage>
            <SelectedImage
              style={{resizeMode: 'cover'}}
              source={{
                uri: image.uri,
              }}
            />
            {/* <AddMoreImages>
            <Text>Adicionar mais imagens</Text>
          </AddMoreImages> */}
          </SelectedImageContainer>
        ) : (
          <ImagePickerContainer
            style={styles.item}
            onPress={() =>
              launchImageLibrary({mediaType: 'photo'}, handleImagePicker)
            }>
            <FontAwesome5 name="plus" size={36} solid color="#00E676" />
          </ImagePickerContainer>
        )}

        <Image />
        {Fields}
        <SelectInput
          handleValueChange={value => console.log(value)}
          items={itemsSelect}
        />
      </Container>
    </ScrollView>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: screenWidth - 60,
  },
});
