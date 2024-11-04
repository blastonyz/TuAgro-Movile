import { useState } from "react"
import { Text, View, Pressable, Image } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import * as ImagePicker from 'expo-image-picker'
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = () => {
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
                image ?
                <Image source={{uri: image}} resizeMode='cover'  />
                :
                <Text>{user.charAt(0).toUpperCase()}</Text>

            }
          </View>

          <Pressable onPress={pickImage} >
              <Icon name="photo-camera" size={24} color="#fff" />
          </Pressable>
      </View>
  )
}

export default ProfileScreen