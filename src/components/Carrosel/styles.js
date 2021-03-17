import styled, {css} from 'styled-components/native';
import {text} from '../../GlobalStyles';

export const Container = styled.View`
  padding: 16px;
  align-items: center;
`;

export const FlexSafeAreaView = styled.View`
  /* flex: 1; */
`;

export const ItemText = styled(text)`
  font-size: ${(props) => props.theme.font.sm};
  color: rgba(40, 40, 40, 0.5);
  ${(props) =>
    props.selected &&
    css`
      color: ${props.theme.text};
      text-decoration-line: underline;
    `}
`;
