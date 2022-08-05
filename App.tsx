/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';

import { AppProvider } from './src/context';
import theme from './src/theme.json';
import Navigation from './src/navigation';

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <AppProvider>
          <StatusBar style="auto" />
          <Navigation />
        </AppProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
