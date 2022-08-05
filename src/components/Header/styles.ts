import styled from 'styled-components/native';

export const Container = styled.View`
  height: 110px;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }) => theme.colors.gray};
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const LeftIconContainer = styled.TouchableOpacity`
  width: 100px;
  margin-left: 30px;
  justify-content: center;
`;

export const RightIconContainer = styled.TouchableOpacity`
  width: 100px;
  margin-right: 30px;
  align-items: flex-end;
  justify-content: center;
`;
