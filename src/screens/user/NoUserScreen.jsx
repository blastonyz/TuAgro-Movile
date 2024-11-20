import { Text, View, StyleSheet,Button } from "react-native"
//import NavButton from "../../components/ui/NavButton"
//import AuthContainer from "../../components/auth/AuthContainer"
//import FormContainer from "../../components/auth/FormContainer"
//import { useCamera } from "../../components/device/UseCamera"
//import * as ImagePicker from 'expo-image-picker';


const NoUserScreen = () => {
    const pickImage = async () => {
        const permission = await ImagePicker.requestCameraPermissionsAsync();
        console.log('Permiso:', permission);
        if (permission.granted) {
            try {
                let result = await ImagePicker.launchCameraAsync({
                    allowsEditing: true,
                    quality: 0.5,
                });
                console.log('Camera Result:', result);
            } catch (error) {
                console.log('Error:', error);
            }
        } else {
            console.log('Permiso denegado');
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Abrir Cámara" onPress={pickImage} />
        </View>
    );
};

export default NoUserScreen

const styles = StyleSheet.create({
    mainNoUs:{
        flex:1,
        height:800
    },
    authLinks: {
        paddingVertical: 25,
        justifyContent: 'space-between',
        width: '100%'
    },
    noUserText: {
        fontSize: 24,
        textAlign: 'center'
    },
})