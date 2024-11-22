import {  createNativeStackNavigator } from "@react-navigation/native-stack"
import CategoriesScreen from "../screens/products/CategoriesScreen";
import  CategoryProducts  from "../screens/products/CategoryProducts";
import ProductSelected from "../screens/products/ProductSelected";
import  CartScreen  from "../screens/cart/CartScreen";
import PurchasesScreen from "../screens/PurchasesScreen";

const Stack =  createNativeStackNavigator();

const CategorieStack = () => (
 
<Stack.Navigator>
    <Stack.Screen name="CategoriesRender" component={CategoriesScreen}
    options={{ headerShown: false }} />
    <Stack.Screen
      name="ProductosCategoria"
      component={CategoryProducts}
      options={{ headerShown: false }}  
    />
      <Stack.Screen
      name="Producto"
      component={ProductSelected}
      options={{ headerShown: false }}  
    />
       <Stack.Screen
      name="Carrito"
      component={CartScreen}
      //options={{ headerShown: false }}  
    />
         <Stack.Screen
      name="Compras"
      component={PurchasesScreen}
      options={{ headerShown: false }}  
    />
  </Stack.Navigator>
);

export default CategorieStack