import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Container = styled.View`
  flex: 1;
  padding-left: 20px;
  background-color: ${({ theme }) => theme.colors.white};
`;
