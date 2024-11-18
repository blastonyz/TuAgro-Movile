import { View, TextInput, Pressable, Text, StyleSheet, Image } from "react-native";
import { useState, useEffect } from "react";
import { useSignUpMutation } from "../../services/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/auth/authSlice.js";
import { colors } from "../../utils/colors.js";
import AuthContainer from "../../components/auth/AuthContainer.jsx";
import FormContainer from "../../components/auth/FormContainer.jsx";
import NavButton from "../../components/ui/NavButton.jsx";
import SectionTitle from "../../components/ui/SectionTItle.jsx";

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
        <AuthContainer>
         <View style={styles.form}>
         <FormContainer cardWidth={{ width: '80%'}}>
                <View style={styles.headLogo}>
                    <Image
                        source={require('../../../assets/main-logoNew.png')}
                        style={styles.headImage}
                    />
                </View>
                <SectionTitle text={'Registrate'}/>
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
                       <SectionTitle text={'Enviar'}/>
                    </Pressable>

                    <NavButton navigation={navigation}
                    route={'Login'} text={'Login'}/>
                </View>
                </FormContainer>
                </View>
        </AuthContainer>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    form:{ 
        flex: 1,
    },
    headLogo: {
        height: 100,
        width: '100%',
        alignItems: 'center',
        marginTop: 10
    },
    headImage: {
        height: 100,
        width: '60%',
        alignItems: 'center'
    },
    mainInputs: {
        alignItems: 'center',
        
    },
    input: {
        backgroundColor: colors.yellow,
        width: '50%',
        top:0,
        height:30,
        fontSize:16,
        margin: 10,
        borderRadius:10,
        paddingHorizontal:10
    },
})