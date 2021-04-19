import styled from 'styled-components/native';
import {RowFlex, text} from '../../GlobalStyles';

export const CityRowFlex = styled(RowFlex)`
  justify-content: space-between;
`;

export const City = styled(text)`
  color: #282828;
  padding-right: 4px;
  font-size: ${props => props.theme.font.sm};
`;

export const SearchBarContainer = styled(RowFlex)`
  align-items: center;
  background-color: #ffffff;
  margin: 20px 0;
  border-radius: 24px;
`;

export const SearchBar = styled.TextInput`
  padding-left: 38px;
  padding-right: 38px;
  flex: 1;
  font-size: ${({theme}) => theme.font.sm};
`;

export const SignUpPressable = styled.Pressable`
  padding: 8px;
  margin-top: 16px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.text};
  height: 80px;
`;

export const SignUpText = styled(text)`
  text-align: center;
  font-size: ${props => props.theme.font.lg};
  color: ${({theme}) => theme.white};
`;

export const UserImage = styled.Image`
  width: 50px;
  height: 50px;
`;
