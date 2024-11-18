import React from 'react'
import { View,Text,StyleSheet, Pressable } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';

 const TabBottoms = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.footer}>
      <Pressable onPress={() => navigation.navigate('Productos', { screen: 'CategoriesRender' })}>
        <MaterialIcons name='storefront' size={30}/>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Productos', { screen: 'Carrito' })}>
        <MaterialIcons name='shopping-cart' size={30}/>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Autenticacion', { screen: 'Perfil' })}>
        <MaterialIcons name='account-circle' size={30}/>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    footer:{
        flexDirection: 'row',
        position:'relative',
        bottom:0,
        justifyContent: 'space-around',
        backgroundColor:'#4CAF50',
        height:40
    }
})

export default TabBottoms;