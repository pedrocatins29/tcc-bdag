import {useHeaderHeight} from '@react-navigation/stack';
import React, {useState} from 'react';
import {ScrollView, Image, useWindowDimensions, View} from 'react-native';
import {Container} from '../../GlobalStyles';
import {useForm} from 'react-hook-form';
import Input from '../../components/Register/Input';
import {
  ClearImage,
  ImagePickerContainer,
  SelectedImage,
  SelectedImageContainer,
  SignUpPressable,
  ButtonText,
} from './AddProduct.styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {launchImageLibrary} from 'react-native-image-picker';
import SelectInput from '../../components/Input/SelectInput';
import {TextLabel} from '../../components/Register/styles';

const AddProduct = () => {
  const screenWidth = useWindowDimensions().width;
  const headerHeight = useHeaderHeight();
  const {control, handleSubmit, errors} = useForm();
  const onSubmit = data => console.log(data);
  const [image, setImage] = useState();
  const [category, setCategory] = useState('');
  const [unidade, setUnidade] = useState('');

  const itemsSelect = [
    {
      id: '1',
      label: 'Verduras',
      value: 'Verduras',
      color: '#FFFFFF',
    },
    {
      id: '2',
      label: 'Temperos',
      value: 'Temperos',
      color: '#FFFFFF',
    },
    {
      id: '3',
      label: 'Frutas',
      value: 'Frutas',
      color: '#FFFFFF',
    },
    {
      id: '4',
      label: 'Legumes',
      value: 'Legumes',
      color: '#FFFFFF',
    },
    {
      id: '5',
      label: 'Graõs',
      value: 'Graõs',
      color: '#FFFFFF',
    },
    {
      id: '6',
      label: 'Outros',
      value: 'Outros',
      color: '#FFFFFF',
    },
  ];

  const unidadeSelect = [
    {
      id: '1',
      label: 'Kg',
      value: 'Kg',
      color: '#FFFFFF',
    },
    {
      id: '2',
      label: 'Saco',
      value: 'Saco',
      color: '#FFFFFF',
    },
    {
      id: '3',
      label: 'Unidade',
      value: 'Unidade',
      color: '#FFFFFF',
    },
  ];

  const inputs = [
    {name: 'Nome do produto', required: true},
    {name: 'Preço', required: true},
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
    if (key !== 2) {
      return (
        <Input
          key={key}
          control={control}
          errors={errors}
          name={item.name}
          required={item.required}
        />
      );
    } else {
      return (
        <Input
          multiline={true}
          numberOfLines={4}
          key={key}
          control={control}
          errors={errors}
          name={item.name}
          required={item.required}
        />
      );
    }
  });

  return (
    <ScrollView
      style={{
        backgroundColor: 'red',
        marginTop: headerHeight,
      }}>
      <Container>
        {image ? (
          <SelectedImageContainer style={{flex: 1, height: screenWidth - 60}}>
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
            style={{flex: 1, height: screenWidth - 60}}
            onPress={() =>
              launchImageLibrary({mediaType: 'photo'}, handleImagePicker)
            }>
            <FontAwesome5 name="plus" size={36} solid color="#00E676" />
          </ImagePickerContainer>
        )}

        <Image />
        {Fields}
        <View>
          <TextLabel>Unidade</TextLabel>
          <SelectInput
            label="Selecione a unidade..."
            value={unidade}
            handleValueChange={setUnidade}
            items={unidadeSelect}
          />
        </View>
        <View>
          <TextLabel>Categoria</TextLabel>
          <SelectInput
            value={category}
            label="Selecione uma categoria..."
            handleValueChange={setCategory}
            items={itemsSelect}
          />
        </View>

        <SignUpPressable onPress={() => handleSubmit(onSubmit)}>
          <ButtonText>Cadastrar!</ButtonText>
        </SignUpPressable>
      </Container>
    </ScrollView>
  );
};

export default AddProduct;

// const styles = StyleSheet.create({
//   item: {

//   },
// });
