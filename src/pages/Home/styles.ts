import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  padding: 20px 0 20px 20px;
  background-color: ${({ theme }) => theme.colors.white};
`;
