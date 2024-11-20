import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Navigator from './src/navigation/Navigator';
import Header from './src/components/Header';
import TabBottoms from './src/components/TabBottoms';
import { store } from './src/app/store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { createSessionsTable } from './src/db';

createSessionsTable()
.then((result)=>console.log('local db runing',result))
.catch((error)=>console.log(error))

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    'ChelseaMarket': require('./assets/fonts/ChelseaMarket-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <Provider store={store}>

        <NavigationContainer>
          <StatusBar barStyle="light-content" />
          <Header />
          <Navigator />
          <TabBottoms />
        </NavigationContainer>

      </Provider>
    </>
  );
}

