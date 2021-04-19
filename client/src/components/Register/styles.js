import styled from 'styled-components/native';
import {RowFlex, text} from '../../GlobalStyles';

export const TextInputContainer = styled.View``;

export const RegisterTextInput = styled.TextInput`
  border-radius: 8px;
  color: ${({theme}) => theme.text};
  margin: 5px 0;
  background-color: ${({theme}) => theme.white};
  font-size: ${({theme}) => theme.font.sm};
`;

export const TextLabel = styled(text)`
  padding-left: 10px;
  font-size: ${({theme}) => theme.font.xsm};
`;

export const TextError = styled(text)`
  padding-left: 10px;
  font-size: ${({theme}) => theme.font.xxsm};
  color: red;
`;
