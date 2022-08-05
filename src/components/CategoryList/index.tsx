import { MenuItemType } from '~/Types';
import { Container, Header, List } from './styles';
import CategoryItem from '~/components/CategoryItem';

type CategoryListProps = {
  header: string;
  items: MenuItemType[];
};

type MenuItemProp = {
  // eslint-disable-next-line react/no-unused-prop-types
  item: MenuItemType;
};

const CategoryList = ({ header, items }: CategoryListProps) => (
  <Container>
    <Header>{header}</Header>
    <List
      data={items}
      keyExtractor={(item: MenuItemType) => item.name}
      renderItem={({ item }: MenuItemProp) => <CategoryItem item={item} />}
    />
  </Container>
);

export default CategoryList;
