import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StackScreensParams } from '~/Types';
import Home from '~/pages/Home';
import Details from '~/pages/ItemDetails';
import About from '~/pages/About';

const Stack = createNativeStackNavigator<StackScreensParams>();

const Navigation = () => (
  <Stack.Navigator>
    <Stack.Group screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
    </Stack.Group>
    <Stack.Group screenOptions={{ presentation: 'modal', headerShown: false }}>
      <Stack.Screen name="Details" component={Details} />
    </Stack.Group>
  </Stack.Navigator>
);

export default Navigation;
