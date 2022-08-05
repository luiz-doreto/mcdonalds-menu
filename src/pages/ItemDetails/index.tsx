import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackScreensParams } from '~/Types';

import {
  Container,
  ProductName,
  PriceContainer,
  PriceValue,
  Details,
} from './styles';
import AnimatedImage from '~/components/AnimatedImage';

type ScreenProps = NativeStackScreenProps<StackScreensParams, 'Details'>;

const ItemDetails = ({ route }: ScreenProps) => {
  const { item } = route.params;

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
    </Container>
  );
};

export default ItemDetails;
