import styled from 'styled-components/native';

export const Container = styled.View`
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
