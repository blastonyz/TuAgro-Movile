import { useState } from "react"
import { Text, View, Pressable, Image, StyleSheet } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import * as ImagePicker from 'expo-image-picker'
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = ({navigation}) => {
    const [image, setImage] = useState(null)
    const user = useSelector(state=> state.auth.value.email)
    console.log('user:', user);
    
    const verifyCameraPermissions = async () => {
        const {granted} = await ImagePicker.requestCameraPermissionsAsync()
        if(!granted) return false
        return true
    }

    const pickImage = async () => {
        const permissionOk = await verifyCameraPermissions()
        permissionOk? console.log('permiso concedido'):console.log('permiso denegado');
        ;
        
    }
  return (
      <View>
          <View>
              <Text>Perfil</Text>
          </View>
          <View>
          {
                    user ? (
                        image ? (
                            <Image source={{ uri: image }} style={styles.profileImage} resizeMode='cover' />
                        ) : (
                            <Text style={styles.initial}>{user.charAt(0).toUpperCase()}</Text>
                        )
                    ) : (
                        <Text style={styles.noUserText}>No hay usuario registrado</Text>
                    )
                }
          </View>

          <Pressable onPress={pickImage} >
              <Icon name="photo-camera" size={24} color="#fff" />
          </Pressable>

          <Pressable onPress={()=>(navigation.navigate("Login"))}>
            <Text>Inicia Sesion</Text>
        </Pressable>
      </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    profileImage: {
        borderRadius: '50%'
    }
})