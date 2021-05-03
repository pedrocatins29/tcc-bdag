import styled from 'styled-components/native';
import {text} from '../../GlobalStyles';

export const SignUpPressable = styled.Pressable`
  margin-top: 20px;
  background-color: #0f8946;
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

export const InformativeText2 = styled(text)`
  text-align: justify;
  margin-bottom: 10px;
  margin-top: 10px;
  font-size: ${({theme}) => theme.font.xlg};
  color: ${({theme}) => theme.text};
`;
