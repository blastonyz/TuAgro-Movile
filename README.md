aca esta el primer intento 
import { useEffect } from "react"
import { Text, View, Pressable, Image, StyleSheet } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import * as ImagePicker from 'expo-image-picker'
import AuthContainer from "../../components/auth/AuthContainer"
import Icon from 'react-native-vector-icons/MaterialIcons';
import SectionTitle from '../../components/ui/SectionTItle'
import { setProfilePicture } from "../../features/auth/authSlice"
import { usePutProfilePictureMutation, useGetProfilePictureQuery } from "../../services/userApi.js"
import UserCard from "../../components/auth/UserCard.jsx"
import { colors } from "../../utils/colors.js"
import NavButton from "../../components/ui/NavButton.jsx"
import FormContainer from "../../components/auth/FormContainer.jsx"


const ProfileScreen = ({ navigation }) => {

    const user = useSelector(state => state.auth.value.email)
    const image = useSelector(state => state.auth.value.profilePicture)
    const localId = useSelector(state => state.auth.value.localId)
    console.log('user:', user);
    console.log('id: ', localId);

    const dispatch = useDispatch()

    const { data: profilePictureData } = useGetProfilePictureQuery(localId);

    useEffect(() => {
        if (user && !image && profilePictureData?.image) {
            dispatch(setProfilePicture(profilePictureData.image));
        }
    }, [user, image, profilePictureData, dispatch]);



    const [triggerPutProfilePicture, result] = usePutProfilePictureMutation()

    const verifyCameraPermissions = async () => {
        console.log('verifyng');
        
        const {granted,status} = await ImagePicker.getCameraPermissionsAsync()
        console.log('grant: ',granted);
        console.log('status:',status);
        
        if(!granted) return false
        return true
    }

    const pickImage = async () => {
        console.log('pick');
        
        const permissionOk = await verifyCameraPermissions()
        console.log('permision: ',permissionOk);
        
        if (permissionOk) {
            try {
                console.log('Intentando abrir cámara...');
                let result = await ImagePicker.launchCameraAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.All,
                    allowsEditing: true,
                    aspect: [4, 3],
                    base64: true,
                    quality: 0.7,
                });
                console.log('Camera result:', result);
    
                if (!result.canceled) {
                    console.log('Imagen seleccionada:', result.assets[0].uri);
                    dispatch(setProfilePicture(`data:image/jpeg;base64,${result.assets[0].base64}`));
                    triggerPutProfilePicture({ image: `data:image/jpeg;base64,${result.assets[0].base64}`, localId });
                }
            } catch (error) {
                console.log('Error al abrir la cámara:', error);
            }
        } else {
            console.log('permiso denegado');
        }
    };
    return (
        <AuthContainer>
            <View style={styles.form}>
                <FormContainer cardWidth={{ width: '70%' }}>
                    <SectionTitle text={'Perfil'} />

                    <View style={styles.profileContainer}>
                        {
                            user ? (
                                <View style={styles.userSection}>
                                    <UserCard image={image} user={user} />
                                    <Pressable onPress={pickImage} style={styles.editImageIcon}>
                                        <Icon name="photo-camera" size={30} color="black" />
                                    </Pressable>

                                </View>
                            ) : (


                                <View style={styles.authLinks}>
                                    <Text style={styles.noUserText}>No hay usuario registrado</Text>

                                    <NavButton navigation={navigation} route={'Login'} text={'Iniciar Sesion'}
                                        style={styles.pressLinks}
                                    />

                                    <NavButton navigation={navigation} route={'Registro'} text={'Registrarse'}
                                        style={styles.pressLinks}
                                    />

                                </View>

                            )
                        }

                    </View>
                    <Text style={styles.userText}>{user}</Text>

                </FormContainer>
            </View>
        </AuthContainer>
    )
}
