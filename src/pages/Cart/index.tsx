import { useContext } from 'react';
import { FlatList } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';
import { useTheme } from 'styled-components';

import { SafeArea, EmptyContainer, EmptyText } from './styles';
import { AppContext } from '~/context';
import { MenuItemType } from '~/Types';
import Header from '~/components/Header';
import CartItem from '~/components/CartItem';

const Cart = () => {
  const { cartItems } = useContext(AppContext);
  const theme = useTheme();

  return (
    <SafeArea>
      <Header />
      {cartItems.length > 0 ? (
        <FlatList
          data={cartItems}
          keyExtractor={(item: MenuItemType) => item.name}
          renderItem={({ item }) => <CartItem key={item.name} item={item} />}
        />
      ) : (
        <EmptyContainer>
          <Icon name="shopping-cart" size={90} color={theme.colors.gray} />
          <EmptyText>Your cart is empty :/</EmptyText>
        </EmptyContainer>
      )}
    </SafeArea>
  );
};

export default Cart;
