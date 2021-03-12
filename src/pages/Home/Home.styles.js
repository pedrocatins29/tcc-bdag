import styled from 'styled-components/native';
import {RowFlex} from '../../GlobalStyles';

export const CityRowFlex = styled(RowFlex)`
  justify-content: space-between;
`;

export const City = styled.Text`
  color: #282828;
  padding-right: 4px;
`;

export const SearchBar = styled.TextInput`
  background-color: #ffffff;
  margin: 20px 0;
  width: 100%;
  height: 40px;
  border-radius: 25px;
  font-size: 20px;
`;
