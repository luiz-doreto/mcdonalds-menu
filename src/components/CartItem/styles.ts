import styled from 'styled-components/native';

export const Container = styled.View`
  height: 82px;
  width: 100%;
  flex-direction: row;
  padding: 0 8px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.gray};
`;

export const ImageContainer = styled.View`
  height: 80px;
  width: 80px;
  align-items: center;
  justify-content: center;
`;

export const LabelContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.medium}px;
  margin-left: 8px;
  font-weight: 500;
`;

export const DeleteContainer = styled.TouchableOpacity`
  width: 40px;
  justify-content: center;
`;

export const Price = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.medium}px;
  margin-top: 4px;
  margin-left: 8px;
  font-weight: 600;
`;
