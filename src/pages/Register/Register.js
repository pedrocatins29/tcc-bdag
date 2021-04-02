import React from 'react';
import {ScrollView} from 'react-native';
import Input from '../../components/Register/Input';
import {Container} from '../../GlobalStyles';
import {useForm} from 'react-hook-form';
import {
  ButtonText,
  InformativeText,
  PlacehoderText,
  SignUpPressable,
} from './Register.styles';
import {useHeaderHeight} from '@react-navigation/stack';

const Register = () => {
  const {control, handleSubmit, errors} = useForm();
  const headerHeight = useHeaderHeight();
  const onSubmit = data => console.log(data);

  const inputs = [
    {name: 'Nome', required: true},
    {name: 'Rua', required: true},
    {name: 'Bairro', required: true},
    {name: 'Cidade', required: true},
    {name: 'Telefone', required: true},
    {name: 'Nome do negocio', required: true},
  ];

  const Fields = inputs.map((item, key) => {
    return (
      <>
        {key === 5 ? (
          <InformativeText>
            Algum outro nome que pode ajudar as pessoas identificarem seu
            negócio?
          </InformativeText>
        ) : null}
        <Input
          key={key}
          control={control}
          errors={errors}
          name={item.name}
          required={item.required}
        />
      </>
    );
  });

  return (
    <ScrollView>
      <Container style={{paddingTop: headerHeight}}>
        <InformativeText>
          Como as pessoas podem encontrar seu negócio?
        </InformativeText>
        {Fields}
        <SignUpPressable onPress={() => handleSubmit(onSubmit)}>
          <ButtonText>Cadastrar!</ButtonText>
        </SignUpPressable>
      </Container>
    </ScrollView>
  );
};

export default Register;
