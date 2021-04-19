import styled, {css} from 'styled-components/native';
import {RowFlex, text} from '../../GlobalStyles';

export const BoxView = styled.Pressable`
  flex: 0 0 32%;
  background-color: ${(props) => props.theme.white};
  justify-content: center;
  align-items: center;
  padding: 8px;
  margin: 4px;
`;

export const CardView = styled.Pressable`
  border-radius: 4px;
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
  font-size: ${(props) => props.theme.font.xsm};
`;

export const ProductName = styled(text)`
  margin-bottom: 5px;
  font-family: 'Inter-SemiBold';
  font-size: ${(props) => props.theme.font.md};
  ${(props) =>
    props.screen &&
    css`
      font-size: ${props.theme.font.xlg};
    `}
`;

export const ProductPrice = styled(text)`
  font-family: 'Inter-Light';
  font-size: ${(props) => props.theme.font.md};
  ${(props) =>
    props.screen &&
    css`
      font-size: ${props.theme.font.xlg};
    `}
`;

export const ProductDescription = styled(text)`
  margin-left: 5px;
  font-family: 'Inter-Light';
  color: ${(props) => props.theme.text};
  font-size: ${(props) => props.theme.font.xsm};
  ${(props) =>
    props.screen &&
    css`
      font-size: ${props.theme.font.sm};
    `}
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

export const ViewCem = styled.View`
  justify-content: center;
  flex-direction: row;
`;
