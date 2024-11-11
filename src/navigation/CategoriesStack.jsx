import {  createNativeStackNavigator } from "@react-navigation/native-stack"
import CategoriesScreen from "../screens/products/CategoriesScreen";
import  CategoryProducts  from "../screens/products/CategoryProducts";
import ProductSelected from "../screens/products/ProductSelected";
import  CartScreen  from "../screens/cart/CartScreen";

const Stack =  createNativeStackNavigator();

const CategorieStack = () => (
 
<Stack.Navigator>
    <Stack.Screen name="CategoriesRender" component={CategoriesScreen} />
    <Stack.Screen
      name="ProductosCategoria"
      component={CategoryProducts}
      //options={{ headerShown: false }}  Ocultar encabezado en esta ruta
    />
      <Stack.Screen
      name="Producto"
      component={ProductSelected}
      //options={{ headerShown: false }}  Ocultar encabezado en esta ruta
    />
       <Stack.Screen
      name="Carrito"
      component={CartScreen}
      //options={{ headerShown: false }}  Ocultar encabezado en esta ruta
    />
  </Stack.Navigator>
);

export default CategorieStack