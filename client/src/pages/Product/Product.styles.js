import styled from 'styled-components/native';
import {text} from '../../GlobalStyles';

export const CardView = styled.View`
  flex: 2;
  background-color: ${props => props.theme.white};
  padding: 24px;
`;

export const CategoryText = styled.Text`
  color: ${({theme}) => theme.green};
  font-size: ${({theme}) => theme.font.md};
`;

export const Line = styled.View`
  background-color: #fea82f;
  width: 100%;
  height: 1.2px;
`;

export const CustomProductDescription = styled(text)`
  font-family: 'Inter-Light';
  color: ${props => props.theme.text};
  font-size: ${props => props.theme.font.md};
`;
