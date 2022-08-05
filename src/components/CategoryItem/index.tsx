import { useNavigation } from '@react-navigation/native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MenuItemType, StackScreensParams } from '~/Types';
import { Container, Label, Image } from './styles';

type CategoryItemType = {
  item: MenuItemType;
};

type ScreenProps = NativeStackScreenProps<StackScreensParams, 'Details'>;
type NavigationProps = ScreenProps['navigation'];

const CategoryItem = ({ item }: CategoryItemType) => {
  const navigation = useNavigation<NavigationProps>();

  const handlePress = () => {
    navigation.navigate('Details', {
      item,
    });
  };

  return (
    <Container onPress={handlePress}>
      <Image source={{ uri: item.url }} />
      <Label>{item.name}</Label>
    </Container>
  );
};

export default CategoryItem;
