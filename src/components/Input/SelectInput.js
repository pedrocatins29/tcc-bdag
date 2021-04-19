import React from 'react';
import {View, Text} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const SelectInput = ({items, handleValueChange}) => {
  return <RNPickerSelect onValueChange={handleValueChange} items={items} />;
};

export default SelectInput;
