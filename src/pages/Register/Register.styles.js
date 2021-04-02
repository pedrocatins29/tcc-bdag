import styled from 'styled-components/native';
import {text} from '../../GlobalStyles';

export const SignUpPressable = styled.Pressable`
  margin-top: 20px;
  background-color: ${({theme}) => theme.text};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 54px;
`;

// export const PlacehoderText = styled.Text`
//   font-size: ${({theme}) => theme.font.md};
//   color: white;
// `;

export const ButtonText = styled(text)`
  font-size: ${({theme}) => theme.font.md};
  color: white;
`;

export const InformativeText = styled(text)`
  text-align: center;
  margin-bottom: 10px;
  margin-top: 10px;
  font-size: ${({theme}) => theme.font.xlg};
  color: ${({theme}) => theme.text};
`;
