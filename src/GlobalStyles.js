import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${(props) => props.theme.bg};
  display: flex;
  flex: 1;
  padding: 16px;
`;

export const RowFlex = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

export const TitleText = styled.Text`
  font-size: 26px;
  color: #282828;
  font-weight: bold;
`;
