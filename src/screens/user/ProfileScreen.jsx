import React from 'react';
import { View, Pressable, StyleSheet, Text, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useSelector, useDispatch } from 'react-redux';
import { colors } from '../../utils/colors';
import { usePutProfilePictureMutation } from '../../services/userApi';
import { clearUser, setProfilePicture } from '../../features/auth/authSlice';
import { clearSessions } from '../../db';
import Icon from 'react-native-vector-icons/MaterialIcons'
import AuthContainer from '../../components/auth/AuthContainer';
import FormContainer from '../../components/auth/FormContainer';
import SectionTitle from '../../components/ui/SectionTItle';

const ProfileScreen = () => {

  const user = useSelector(state => state.auth.value.email)
  const profileImage = useSelector(state => state.auth.value.profilePicture)
  const localId = useSelector(state => state.auth.value.localId)


  const dispatch = useDispatch()

  const [triggerPutProfilePicture, result] = usePutProfilePictureMutation()

  const verifyPermissions = async () => {
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



  const pickImage = async () => {

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
    

      if (!result.canceled) {

        dispatch(setProfilePicture(`data:image/jpeg;base64,${result.assets[0].base64}`))
        triggerPutProfilePicture({ image: `data:image/jpeg;base64,${result.assets[0].base64}`, localId })
      }
    } catch (err) {
      //console.error("Error al abrir la cámara:", err);
    }
  }

  const closeSession = async () => {
    await clearSessions(),
      dispatch(clearUser())
  }

  return (
    <AuthContainer>
    <View style={styles.profileContainer}>
      <FormContainer cardWidth={{width:'85%'}}>
        <SectionTitle text={'Tu Perfil'}/>
        {
          profileImage
            ?
            <View style={styles.profileContainer}>
              <View style={styles.userSection}>
              
                <Pressable onPress={pickImage} style={({ pressed }) => [{ opacity: pressed ? 0.90 : 1 }, styles.cameraIcon]}>
                  <Icon name="photo-camera" size={24} color="black" />
                </Pressable>

              </View>
              <Image source={{ uri: profileImage }} resizeMode='cover' style={styles.profileImage} />
            </View>
            :
            <Text style={styles.textProfilePlaceHolder}>{user?.charAt(0).toUpperCase()}</Text>
        }
         <Text style={styles.profileData}>Email: {user}</Text>
         <Pressable onPress={closeSession}>
        <SectionTitle text={'Cerrar Sesion'}/>
      </Pressable>
      </FormContainer>
     

      
    </View>
    </AuthContainer>
  )
};



export default ProfileScreen

const styles = StyleSheet.create({
  profileContainer: {
    marginVertical:35,
    justifyContent: 'space-around',
    alignItems: 'center',
    width:'100%',

  },
  imageProfileContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor:colors.greenShadow,
    borderWidth:4,
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  textProfilePlaceHolder: {
    color: colors.yellow,
    fontSize: 48,
  },
  profileData: {
    fontFamily:'ChelseaMarket',
    fontSize: 16,
    fontWeight:'600',
    textAlign:'center',
    marginVertical:40
  },
  cameraIcon: {
    position: 'absolute',
    top:80,
    left:50,
    backgroundColor:colors.greenShadow,
    borderRadius:40,
    zIndex:99
  },
  profileImage: {
    width: 128,
    height: 128,
    borderRadius: 128
  }
})

//<Image source={{ uri: profileImage }} resizeMode='cover' style={styles.profileImage} />