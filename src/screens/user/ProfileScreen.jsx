import React from 'react';
import { View,Pressable,StyleSheet,Text, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useSelector,useDispatch } from 'react-redux';
import { colors } from '../../utils/colors';
import { usePutProfilePictureMutation } from '../../services/userApi';
import { clearUser, setProfilePicture } from '../../features/auth/authSlice';
import { clearSessions } from '../../db';

const ProfileScreen = () => {
    
  const user = useSelector(state=>state.auth.value.email)
  const profileImage = useSelector(state=>state.auth.value.profilePicture)
  const localId = useSelector(state=>state.auth.value.localId)
   
  
  const dispatch = useDispatch()

  const [triggerPutProfilePicture,result] = usePutProfilePictureMutation() 

    const verifyPermissions = async () => {
        console.log('permisos...');
        
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== "granted") {
          Alert.alert(
            "Permiso denegado",
            "No se puede acceder a la cámara sin permisos.",
            [{ text: "OK" }]
          );
          return false;
        }
        return true;
  
    }
    
  

  const pickImage = async () =>{
   
    
    const permissionOk = await verifyPermissions();
    console.log(permissionOk);
    
    if (!permissionOk) return;
    console.log('permisos ok');
    
    try {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.7,
        base64: true,
      });
      console.log('result: ',result);
      
      if (!result.canceled) {
      
        dispatch(setProfilePicture(`data:image/jpeg;base64,${result.assets[0].base64}`))
        triggerPutProfilePicture({image: `data:image/jpeg;base64,${result.assets[0].base64}`,localId})
      }
    } catch (err) {
      //console.error("Error al abrir la cámara:", err);
    }
  }
  
  const closeSession = async() => {
      await clearSessions(),
      dispatch(clearUser())
  }
  return (
    <View style={styles.profileContainer}>
        <View style={styles.imageProfileContainer}>
            {
                profileImage
                    ?
                    
                    <Image source={{ uri: profileImage }} resizeMode='cover' style={styles.profileImage} />
                    :
                    <Text style={styles.textProfilePlaceHolder}>{user?.charAt(0).toUpperCase()}</Text>
            }
            <Pressable onPress={pickImage} style={({ pressed }) => [{ opacity: pressed ? 0.90 : 1 }, styles.cameraIcon]} >
                <Text>Foto</Text>
            </Pressable>
        </View>
        <Text style={styles.profileData}>Email: {user}</Text>

        <Pressable onPress={closeSession}>
          <Text>Cerrar Sesion</Text>
        </Pressable>
    </View>
)
};



export default ProfileScreen

const styles = StyleSheet.create({
    profileContainer: {
        padding: 32,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageProfileContainer: {
        width: 128,
        height: 128,
        borderRadius: 128,
        backgroundColor: colors.softGreen,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textProfilePlaceHolder: {
        color: colors.yellow,
        fontSize: 48,
    },
    profileData: {
        paddingVertical: 16,
        fontSize: 16
    },
    cameraIcon: {
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    profileImage: {
        width: 128,
        height: 128,
        borderRadius: 128
    }
})

//<Image source={{ uri: profileImage }} resizeMode='cover' style={styles.profileImage} />