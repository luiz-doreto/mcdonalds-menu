import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackScreensParams } from '~/Types';

import {
  Container,
  Image,
  ProductName,
  PriceContainer,
  PriceValue,
  Details,
} from './styles';

type ScreenProps = NativeStackScreenProps<StackScreensParams, 'Details'>;

const ItemDetails = ({ route }: ScreenProps) => {
  const { item } = route.params;

  return (
    <Container>
      <Image source={{ uri: item.url }} />
      <ProductName>{item.name}</ProductName>
      <PriceContainer>
        <PriceValue>{`$${item.price}`}</PriceValue>
      </PriceContainer>
      <Details>{item.description}</Details>
    </Container>
  );
};

export default ItemDetails;
