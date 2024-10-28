import {View, StyleSheet,Text} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
//import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import 'react-native-gesture-handler';
import  Home from "../home/Home.jsx";
import  Side from "../components/Side.jsx";
//import CategorieScreen from '../screens/CategoriesScreen.jsx';
import CategorieStack from './CategoriesStack.jsx';
//const Stack = createNativeStackNavigator();
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
/*USO DE STACK NAVIGATIUON
const HomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        
      </Stack.Navigator>
    );
  };*/

 const Navigator = () => {
  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home"
           drawerContent={(props) => <CustomDrawerContent {...props} />} // Utiliza el componente de contenido personalizado
           screenOptions={{
             //header: () => <Header />,
             headerStyle: { backgroundColor: '#4CAF50' }, // Color de fondo de la cabecera
             headerTintColor: '#fff', // Color del texto en la cabecera
           }}>
            <Drawer.Screen name="TuAgro" component={Home}  options={{ drawerLabel: () => <Text style={styles.drawerItemLabel}>Inicio</Text> }} />
            <Drawer.Screen name="Productos" component={CategorieStack} options={{ drawerLabel: () => <Text style={styles.drawerItemLabel}>Productos</Text> }}/>
            <Drawer.Screen name="Nosotros" component={Side} options={{ drawerLabel: () => <Text style={styles.drawerItemLabel}>Nosotros</Text> }}/>
            <Drawer.Screen name="Contacto" component={Side} options={{ drawerLabel: () => <Text style={styles.drawerItemLabel}>Contacto</Text> }}/>
           {/* <Drawer.Screen name="Productos" component={Side} options={{ drawerLabel: () => null, drawerItemStyle: {heigth: 0}}}/>*/}
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
    
  });

export default Navigator


