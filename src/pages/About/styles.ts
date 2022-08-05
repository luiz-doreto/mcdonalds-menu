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
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.large}px;
  font-weight: 700;
  text-align: center;
`;

export const Description = styled.Text`
  margin-top: 20px;
  font-size: ${({ theme }) => theme.fontSize.medium}px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};
`;

export const MapContainer = styled.View`
  flex: 1;
  margin-top: 20px;
  height: 300px;
`;

export const AddressContainer = styled.View`
  margin-top: 20px;
`;

export const Address = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.medium}px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};
  text-align: right;
`;
