import Logo from '~/assets/logo.svg';
import { Container, LeftIconContainer, RightIconContainer } from './styles';

type HeaderProps = {
  leftIcon?: React.ReactNode;
  onLeftPress?: () => void;
  rightIcon?: React.ReactNode;
  onRightPress?: () => void;
};

const Header = ({
  leftIcon,
  onLeftPress,
  rightIcon,
  onRightPress,
}: HeaderProps) => (
  <Container>
    <LeftIconContainer onPress={onLeftPress}>{leftIcon}</LeftIconContainer>
    <Logo />
    <RightIconContainer onPress={onRightPress}>{rightIcon}</RightIconContainer>
  </Container>
);

Header.defaultProps = {
  leftIcon: null,
  onLeftPress: () => null,
  rightIcon: null,
  onRightPress: () => null,
};

export default Header;
