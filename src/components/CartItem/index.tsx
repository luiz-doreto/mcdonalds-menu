import { useContext } from 'react';
import Icon from '@expo/vector-icons/MaterialIcons';
import { useTheme } from 'styled-components/native';

import { AppContext } from '~/context';
import AnimatedImage from '../AnimatedImage';
import { MenuItemType } from '~/Types';
import {
  Container,
  ImageContainer,
  Label,
  LabelContainer,
  Price,
  DeleteContainer,
} from './styles';

type ComponentProps = {
  item: MenuItemType;
};

const CartItem = ({ item }: ComponentProps) => {
  const { removeItem } = useContext(AppContext);
  const theme = useTheme();

  return (
    <Container>
      <ImageContainer>
        <AnimatedImage
          source={{ uri: item.url }}
          resizeMode="cover"
          style={{ height: 70, width: 70, borderRadius: 35 }}
        />
      </ImageContainer>
      <LabelContainer>
        <Label>{item.name}</Label>
        <Price>{`$${item.price}`}</Price>
      </LabelContainer>
      <DeleteContainer onPress={() => removeItem(item)}>
        <Icon name="delete" size={32} color={theme.colors.danger} />
      </DeleteContainer>
    </Container>
  );
};
export default CartItem;
