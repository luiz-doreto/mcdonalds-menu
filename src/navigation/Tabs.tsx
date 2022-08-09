import { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '@expo/vector-icons/MaterialIcons';
import { useTheme } from 'styled-components/native';

import { AppContext } from '~/context';
import { TabScreensParams } from '~/Types';

import MenuStack from './Stack';
import Cart from '~/pages/Cart';

const Tab = createBottomTabNavigator<TabScreensParams>();

const Tabs = () => {
  const { cartItems } = useContext(AppContext);
  const theme = useTheme();

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Menu"
        component={MenuStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="menu-book"
              size={32}
              color={focused ? theme.colors.yellow : theme.colors.black}
            />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="shopping-cart"
              size={32}
              color={focused ? theme.colors.yellow : theme.colors.black}
            />
          ),
          tabBarShowLabel: false,
          tabBarBadge: cartItems.length,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
