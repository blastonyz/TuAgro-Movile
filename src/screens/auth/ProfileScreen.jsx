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
        const { granted } = await ImagePicker.requestCameraPermissionsAsync()
        if (!granted) return false
        return true
    }

    const pickImage = async () => {
        const permissionOk = await verifyCameraPermissions()
        if (permissionOk) {
            console.log('permiso concedido')
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                base64: true,
                quality: 0.7
            })

            if (!result.canceled) {
                dispatch(setProfilePicture(`data:image/jpeg;base64,${result.assets[0].base64}`))
                triggerPutProfilePicture({ image: `data:image/jpeg;base64,${result.assets[0].base64}`, localId })
            }
        } else {
            console.log('permiso denegado');

        }
    }
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
                                        <Icon name="photo-camera" size={24} color="black" />
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

export default ProfileScreen

const styles = StyleSheet.create({
    form: {
        flex: 1,

    },
    mainProfile: {
        flex: 1,
        alignSelf: 'center',
        marginTop: 20,
        justifyContent: 'space-between',
        borderWidth: 2,
        borderColor: 'yellow',
        borderRadius: 20,
        backgroundColor: colors.softGreen
    },

    profileContainer: {
        height: '50%'
    },
    userSection:{
        alignItems:'center',
        marginTop:20,
    
    },
    initial: {
        fontSize: 40
    },
    editImageIcon: {
        backgroundColor: colors.greenShadow,
        borderRadius: 100,
        height: 35,
        width: 35,
        paddingVertical: 5,
        paddingHorizontal: 4,
        position: 'absolute',
        top: 0,
        right: '25%',

    },
    userText: {
        fontWeight: '600',
        textAlign: 'center'
    },
    noUserText: {
        fontSize: 24,
        textAlign: 'center'
    },
    authLinks: {
        paddingVertical: 25,
        justifyContent: 'space-between',
        width: '100%'
    },
    pressLinks: {
        justifyContent: 'space-between',
        paddingVertical: 25,
    },
})