import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {RegisterTextInput} from './style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const SelectInput = ({items, handleValueChange, value, label}) => {
  return (
    <RNPickerSelect
      value={value}
      Icon={() => (
        <FontAwesome5
          name={'arrow-down'}
          size={16}
          solid
          color={'#00E676'}
          style={{
            top: 18,
            right: 10,
          }}
        />
      )}
      placeholder={{
        label,
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
