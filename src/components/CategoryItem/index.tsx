import { useNavigation } from '@react-navigation/native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MenuItemType, StackScreensParams } from '~/Types';
import { Container, Label } from './styles';
import AnimatedImage from '~/components/AnimatedImage';

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
      <AnimatedImage
        source={{ uri: item.url }}
        style={{ height: 100, width: 156, marginTop: 5 }}
      />
      <Label>{item.name}</Label>
    </Container>
  );
};

export default CategoryItem;
