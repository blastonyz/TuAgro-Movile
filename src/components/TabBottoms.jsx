import {useEffect} from 'react'
import { View,StyleSheet, Pressable } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';
import { useSelector,useDispatch } from 'react-redux';
import { setUser } from '../features/auth/authSlice';
import { fetchSession } from '../db/index';
import { useGetProfilePictureQuery } from '../services/userApi';
import { setProfilePicture } from '../features/auth/authSlice';

 const TabBottoms = () => {
  const navigation = useNavigation();
  const user = useSelector(state => state.auth.value.email);
  const localId = useSelector(state=>state.auth.value.localId)
  console.log('localId: ',localId);
  
  const dispatch = useDispatch()

  const {data:profilePicture, isLoading, error} = useGetProfilePictureQuery(localId)



  useEffect(() => {
    if(!user){
      (async()=>{
        try {
          const session = await fetchSession()
          dispatch(setUser(session[0]))
        } catch (error) {
          console.log('error al recuperar sesion',error);
          
        }
      })()
    }
  }, [user])
  
  useEffect(()=>{
    if(profilePicture){
        dispatch(setProfilePicture(profilePicture.image))
    }
    
},[profilePicture])

  console.log('user:',user);
  return (
    <View style={styles.footer}>
      <Pressable onPress={() => navigation.navigate('Productos', { screen: 'CategoriesRender' })}>
        <MaterialIcons name='storefront' size={30}/>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Productos', { screen: 'Carrito' })}>
        <MaterialIcons name='shopping-cart' size={30}/>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Autenticacion', { screen: 'Perfil' })} >
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