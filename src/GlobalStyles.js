import styled from 'styled-components/native';

export const RowFlex = styled.View`
  flex-direction: row;
`;

export const Container = styled.View`
  background-color: ${props => props.theme.bg};
  flex: 1;
  padding: 16px;
`;

export const text = styled.Text`
  color: ${props => props.theme.text};
  font-family: 'Inter-Regular';
`;

export const TitleText = styled(text)`
  margin-top: 10px;
  font-size: ${props => props.theme.font.xxlg};
  font-family: 'Inter-Bold';
`;
