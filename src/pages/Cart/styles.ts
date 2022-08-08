import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const SafeArea = styled(SafeAreaView).attrs({
  edges: ['top', 'left', 'right'],
})`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const EmptyContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const EmptyText = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.medium}px;
  color: ${({ theme }) => theme.colors.black};
  opacity: 0.5;
  margin-top: 10px;
`;
