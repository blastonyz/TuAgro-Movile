
import {  createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CategoriesScreen from "../screens/CategoriesScreen";
import  CategoryProducts  from "../screens/CategoryProducts";
import ProductSelected from "../screens/ProductSelected";

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
  </Stack.Navigator>
);

export default CategorieStack