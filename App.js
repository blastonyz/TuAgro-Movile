import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Navigator from './src/navigation/Navigator';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import { store } from './src/app/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <>
    <Provider store={store}>
    <StatusBar barStyle="light-content"/>
    <Header/>
    <Navigator/>
    <Footer/>
    </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
//statusbar  backgroundColor="rgba(88, 245, 39, 0.8)"