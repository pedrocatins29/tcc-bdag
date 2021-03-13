import styled from 'styled-components/native';
import {RowFlex, text} from '../../GlobalStyles';

export const BoxView = styled.View`
  background-color: ${(props) => props.theme.white};
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

export const CardView = styled.View`
  align-items: center;
  flex-direction: row;
  width: 100%;
  margin-bottom: 10px;
  background-color: ${(props) => props.theme.white};
  padding: 12px;
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
  flex-wrap: wrap;
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

export const ProductName = styled(text)`
  margin-bottom: 5px;
  font-family: 'Inter-SemiBold';
  font-size: ${(props) => props.theme.fontSizes.md};
`;

export const ProductPrice = styled(text)`
  font-size: ${(props) => props.theme.fontSizes.md};
  font-family: 'Inter-Light';
`;

export const ProductDescription = styled(text)`
  margin-left: 5px;
  font-family: 'Inter-Light';
  color: rgba(40, 40, 40, 0.7);
  font-size: ${(props) => props.theme.fontSizes.sm};
`;
export const ProductDetailsContainer = styled.View`
  flex: 2;
`;

export const ProductNameRowFlex = styled(RowFlex)`
  justify-content: space-between;
`;

export const ProductDescriptionContainer = styled(RowFlex)`
  align-items: center;
`;
