import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {RegisterTextInput} from './style';

const SelectInput = ({items, handleValueChange, value}) => {
  return (
    <RNPickerSelect
      value={value}
      placeholder={{
        label: 'Selecione uma categoria...',
        value: null,
        color: '#9EA0A4',
      }}
      useNativeAndroidPickerStyle={false}
      style={pickerSelectStyles}
      onValueChange={handleValueChange}
      items={items}
    />
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 8,
    color: 'black',
    backgroundColor: 'white',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default SelectInput;
