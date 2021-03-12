import styled from 'styled-components/native';
import {RowFlex, text} from '../../GlobalStyles';

export const BoxView = styled.View`
  flex: 1;
  width: 33.3%;
  background-color: ${(props) => props.theme.white};
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

export const CardView = styled.View`
  width: 100%;
  background-color: ${(props) => props.theme.white};
  padding: 8px;
`;

export const ImageContainer = styled.View`
  flex: 1;
`;

export const ImageStore = styled.Image`
  width: 100px;
  height: 100px;
`;

export const TextStore = styled(text)`
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

export const ProductName = styled(text)`
  font-family: 'Inter-SemiBold';
  font-size: ${(props) => props.theme.fontSizes.md};
`;

export const ProductPrice = styled(text)`
  font-size: ${(props) => props.theme.fontSizes.md};
  font-family: 'Inter-Light';
`;

export const ProductDescription = styled(text)`
  font-family: 'Inter-Light';
  color: rgba(40, 40, 40, 0.7);
  font-size: ${(props) => props.theme.fontSizes.sm};
`;
