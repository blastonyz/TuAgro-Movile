import { View, StyleSheet, Text, Pressable } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import 'react-native-gesture-handler';
import Home from "../home/Home.jsx";
import Side from "../components/Side.jsx";
import CategoriesStack from './CategoriesStack.jsx';
import { DrawerActions } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';
import AuthStack from './AuthStack.jsx';
import Icon from 'react-native-vector-icons/Entypo.js'
const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props} style={styles.drawerContent}>
      <View style={styles.drawerContainer}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};


const Navigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: '#000',
        headerRight: () => (
          <MaterialIcons
            style={styles.menuScreens}
            name="menu"
            size={30}
            color="green"
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          />
        ),
        headerLeft: () => null,
      })}
    >
      <Drawer.Screen name="TuAgro" component={Home} options={{
        drawerLabel: () => <Text style={styles.drawerItemLabel}>Inicio</Text>, headerTitle: () => (
          <View style={styles.headerNavContainer}>
            <Text style={styles.headerNavTitle}>TuAgr</Text>
            <Icon name="globe" size={25} color="green" style={styles.navIcon} />
          </View>
        )
      }} />
      <Drawer.Screen name="Productos" component={CategoriesStack} options={({ navigation }) => ({
    drawerLabel: () => (
      <Pressable onPress={() => navigation.navigate('Productos', { screen: 'CategoriesRender' })}>
        <Text style={styles.drawerItemLabel}>Productos</Text>
      </Pressable>
    ),
  })} />
      <Drawer.Screen name="Nosotros" component={Side} options={{ drawerLabel: () => <Text style={styles.drawerItemLabel}>Nosotros</Text> }} />
      <Drawer.Screen name="Contacto" component={Side} options={{ drawerLabel: () => <Text style={styles.drawerItemLabel}>Contacto</Text> }} />
      <Drawer.Screen name="Autenticacion" component={AuthStack} options={({ navigation }) => ({
    drawerLabel: () => (
      <Pressable onPress={() => navigation.navigate('Autenticacion', { screen: 'Login' })}>
        <Text style={styles.drawerItemLabel}>Sesion</Text>
      </Pressable>
    ),
  })} />
    </Drawer.Navigator>
  )
}


const styles = StyleSheet.create({

  drawerContent: {
    backgroundColor: 'black',
  },
  drawerContainer: {
    flex: 1,
    paddingTop: 20,
  },
  drawerItemLabel: {
    color: 'white',
    fontSize: 20,
  },
  menuScreens: {
    marginRight: 40,

  },
  headerNavContainer: {
    flexDirection: 'row',
    marginLeft: 20,
    height: 55,
    width: 140,
    textAlign: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingLeft: 20
  },
  headerNavTitle: {
    color: 'green',
    fontSize: 24,
    fontWeight: '600',
    fontFamily:'ChelseaMarket',
    textShadowColor: 'rgba(91, 255, 10,.99)',
    textShadowOffset: { width: 0, height: -2 },
    textShadowRadius: 30,
    textAlign: 'center',

  },
  navIcon: {
    paddingTop: 3,
    paddingLeft: 1,
    textShadowColor: 'rgba(91, 255, 51,.99)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,

  }

});

export default Navigator


