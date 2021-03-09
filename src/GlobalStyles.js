import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${(props) => props.theme.bg};
  display: flex;
  flex: 1;
  padding: 16px;
`;

export const ProductCard = styled.View`
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const RowFlex = styled.View`
  flex-direction: row;
`;
