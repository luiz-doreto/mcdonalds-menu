import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView).attrs({
  edges: ['bottom'],
})`
  flex: 1;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ProductName = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.large}px;
  font-weight: 700;
  margin-top: 48px;
  text-align: center;
`;

export const PriceContainer = styled.View`
  margin-top: 20px;
  min-width: 100px;
  align-items: center;
  justify-content: center;
  height: 30px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.black};
  border-radius: 50px;
`;

export const PriceValue = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.medium}px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};
`;

export const Details = styled.Text`
  margin-top: 20px;
  font-size: ${({ theme }) => theme.fontSize.medium}px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  width: 100%;
  justify-content: flex-end;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  max-height: 90px;
  background-color: ${({ theme }) => theme.colors.yellow};
  border-radius: 50%;
  margin: 10px;
  align-items: center;
  justify-content: center;
`;

export const DisabledButton = styled.View`
  flex: 1;
  max-height: 90px;
  background-color: ${({ theme }) => theme.colors.disabled};
  border-radius: 50%;
  margin: 10px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.large}px;
  color: ${({ theme }) => theme.colors.black};
`;

export const ButtonTextDisabled = styled.Text`
  font-weight: 600;
  opacity: 0.5;
  font-size: ${({ theme }) => theme.fontSize.large}px;
  color: ${({ theme }) => theme.colors.black};
`;
