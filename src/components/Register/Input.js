import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Controller} from 'react-hook-form';
import {RegisterTextInput, TextError, TextLabel} from './styles';

const Input = ({control, errors, name, required}) => {
  const [borderColor, setBorderColor] = useState('white');
  return (
    <View>
      <TextLabel>{name}</TextLabel>
      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <RegisterTextInput
            style={{
              borderColor: borderColor,
              borderStyle: 'solid',
              borderWidth: 1,
            }}
            onFocus={() => setBorderColor('#00E676')}
            onBlur={() => setBorderColor('white')}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name={name}
        rules={{required: required}}
        defaultValue=""
      />
      {errors[name] && <TextError>Este campo é obrigatorio.</TextError>}
    </View>
  );
};

export default Input;
