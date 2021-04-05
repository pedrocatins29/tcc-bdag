import styled from 'styled-components/native';

export const RoundedPressable = styled.Pressable`
  background-color: ${({theme}) => theme.green};
  position: absolute;
  margin: 16px;
  right: 0;
  bottom: 5px;
  width: 16%;
  height: 8%;
  justify-content: center;
  align-items: center;
`;
