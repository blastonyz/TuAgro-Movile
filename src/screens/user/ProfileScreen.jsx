import React from 'react';
import { View, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ProfileScreen = () => {
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



export default ProfileScreen;