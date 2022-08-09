import { useContext, useCallback } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackScreensParams } from '~/Types';

import { AppContext } from '~/context';
import {
  Container,
  ProductName,
  PriceContainer,
  PriceValue,
  Details,
  ButtonContainer,
  Button,
  DisabledButton,
  ButtonText,
  ButtonTextDisabled,
} from './styles';
import AnimatedImage from '~/components/AnimatedImage';

type ScreenProps = NativeStackScreenProps<StackScreensParams, 'Details'>;

const ItemDetails = ({ navigation, route }: ScreenProps) => {
  const { item } = route.params;
  const { addItem, checkIsInCart } = useContext(AppContext);

  const handleAddToCart = useCallback(() => {
    navigation.goBack();
    addItem(item);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <AnimatedImage
        source={{ uri: item.url }}
        style={{ height: 220, width: '100%', marginTop: 50 }}
      />
      <ProductName>{item.name}</ProductName>
      <PriceContainer>
        <PriceValue>{`$${item.price}`}</PriceValue>
      </PriceContainer>
      <Details>{item.description}</Details>
      <ButtonContainer>
        {checkIsInCart(item) ? (
          <DisabledButton>
            <ButtonTextDisabled>This product is in the cart</ButtonTextDisabled>
          </DisabledButton>
        ) : (
          <Button onPress={handleAddToCart}>
            <ButtonText>Add to cart</ButtonText>
          </Button>
        )}
      </ButtonContainer>
    </Container>
  );
};

export default ItemDetails;
