import styled from 'styled-components/native';

export const ImagePickerContainer = styled.Pressable`
  justify-content: center;
  align-items: center;
  background-color: #c4c4c4;
  /* height: 50%;
  width: 100%; */
  margin-bottom: 20px;
`;

export const SelectedImage = styled.Image`
  flex: 1;
  width: 100%;
`;

export const AddMoreImages = styled.Pressable`
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: ${({theme}) => theme.text};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 54px;
`;

export const SelectedImageContainer = styled.View`
  margin: 20px 0;
`;

export const ClearImage = styled.Pressable`
  position: absolute;
  z-index: 1;
  align-self: flex-start;
  margin: 10px 10px;
`;
