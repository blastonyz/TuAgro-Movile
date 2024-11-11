import { View, TextInput, Pressable, Text, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { useSignUpMutation } from "../../services/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/auth/authSlice.js";


const SignUpScreen = ({ navigation }) => {

    const [userData, setUserData] = useState({
        email: "",
        password: "",
        repeatPassword: ""
    })

    const [triggerSignUp, result] = useSignUpMutation()

    const dispatch = useDispatch()

    useEffect(() => {
        if (result.status === "rejected") {
            console.log("Error al agregar el usuario", result.error.data?.error || result.error)
        } else if (result.status === "fulfilled") {
            console.log("Usuario agregado con éxito")
            dispatch(setUser(result.data))
        }
    }, [result])

    const handleChange = (name, text) => {
        setUserData({
            ...userData,
            [name]: text
        });
    }

    const handleSubmit = () => {
        const { email, password } = userData;
        console.log("datos enviados:", { email, password });
        triggerSignUp({ email, password });
    }


    return (
        <View style={styles.mainInputs}>
            <TextInput
                placeholder="Email"
                placeholderTextColor={'black'}
                onChangeText={(text) => handleChange('email', text)}
                keyboardType="email-address"
                value={userData.email}
                style={styles.input}
            />

            <TextInput
                placeholder="Password"
                placeholderTextColor={'black'}
                onChangeText={(text) => handleChange('password', text)}
                value={userData.password}
                secureTextEntry
                style={styles.input}
            />

            <TextInput
                placeholder="Repetir Password"
                placeholderTextColor={'black'}
                onChangeText={(text) => handleChange('repeatPassword', text)}
                value={userData.repeatPassword}
                secureTextEntry
                style={styles.input}
            />
            <Pressable onPress={handleSubmit}>
                <Text>Enviar</Text>
            </Pressable>

            <Pressable onPress={() => (navigation.navigate('Login'))}>
                <Text>Login</Text>
            </Pressable>
        </View>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    mainInputs: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        backgroundColor: 'yellow',
        width: '50%',
        margin: 10
    },
})