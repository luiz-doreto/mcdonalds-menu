import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-bottom: 20px;
`;

export const Header = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.xLarge}px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const List = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;
