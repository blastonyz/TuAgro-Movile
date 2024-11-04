import {View, StyleSheet,Text, Pressable, Button} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import 'react-native-gesture-handler';
import  Home from "../home/Home.jsx";
import  Side from "../components/Side.jsx";
import CategorieStack from './CategoriesStack.jsx';
import { DrawerActions } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';
import AuthStack from './AuthStack.jsx';
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
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={({ navigation }) => ({
          headerStyle: { backgroundColor: '#4CAF50' },
          headerTintColor: '#fff',
          headerRight: () => (
            <MaterialIcons
              style= {styles.menuScreens}
              name="menu"
              size={30}
              color="white"
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            />
          ),
          headerLeft: () => null, 
        })}
      >
            <Drawer.Screen name="TuAgro" component={Home}  options={{ drawerLabel: () => <Text style={styles.drawerItemLabel}>Inicio</Text> }} />
            <Drawer.Screen name="Productos" component={CategorieStack} options={{ drawerLabel: () => <Text style={styles.drawerItemLabel}>Productos</Text> }}/>
            <Drawer.Screen name="Nosotros" component={Side} options={{ drawerLabel: () => <Text style={styles.drawerItemLabel}>Nosotros</Text> }}/>
            <Drawer.Screen name="Contacto" component={Side} options={{ drawerLabel: () => <Text style={styles.drawerItemLabel}>Contacto</Text> }}/>
            <Drawer.Screen name="Autenticacion" component={AuthStack} options={{ drawerLabel: () => <Text style={styles.drawerItemLabel}>Registro</Text> }}/>
        </Drawer.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
        
    drawerContent: {
      backgroundColor: 'black',
    },
    drawerContainer: {
      flex: 1,
      paddingTop: 20, // Añade espacio superior si es necesario
    },
    drawerItemLabel: {
        color: 'white',
        fontSize: 20,
      },
    menuScreens:{
      marginRight: 20,
      
    }  
    
  });

export default Navigator


