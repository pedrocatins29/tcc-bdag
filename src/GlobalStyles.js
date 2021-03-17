import styled from 'styled-components/native';

export const RowFlex = styled.View`
  flex-direction: row;
`;

export const Container = styled.View`
  background-color: ${(props) => props.theme.bg};
  flex: 1;
  padding: 16px;
`;

export const text = styled.Text.attrs((props) => ({
  size: props.size || '18px',
}))`
  color: ${(props) => props.theme.text};
  font-family: 'Inter-Regular';
  font-size: ${(props) => props.size};
`;

export const TitleText = styled(text)`
  margin-top: 10px;
  font-size: ${(props) => props.theme.font.lg};
  font-family: 'Inter-Bold';
`;
