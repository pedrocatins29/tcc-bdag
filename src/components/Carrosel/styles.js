import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 14px;
  align-items: center;
`;

export const FlexSafeAreaView = styled.View`
  /* flex: 1; */
`;

export const ItemText = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: #282828;
`;