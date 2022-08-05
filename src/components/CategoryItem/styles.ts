import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  border: 1px;
  border-radius: 5px;
  border-color: ${({ theme }) => theme.colors.gray};
  width: 160px;
  height: 160px;
  margin-right: 16px;
  align-items: center;
`;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.small}px;
  padding: 10px;
  text-align: center;
`;

export const Image = styled.Image`
  margin-top: 5px;
  width: 156px;
  height: 100px;
`;
