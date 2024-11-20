import { View, TextInput, Pressable, Text, StyleSheet, Image } from "react-native";
import { useState, useEffect } from "react";
import { useLoginMutation } from "../../services/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/auth/authSlice";
import { colors } from "../../utils/colors";
import AuthContainer from "../../components/auth/AuthContainer";
import NavButton from '../../components/ui/NavButton';
import SectionTitle from "../../components/ui/SectionTItle";
import FormContainer from "../../components/auth/FormContainer";
import { insertSessions } from "../../db";

const LoginScreen = ({ navigation }) => {


    const [userLog, setUserLog] = useState({
        email: "",
        password: ""
    })

    const [triggerLogin, result] = useLoginMutation()

    const dispatch = useDispatch()

    useEffect(() => {
        if (result.status === "rejected") {
            console.log("Error al agregar el usuario", result.error.data?.error || result.error)
        } else if (result.status === "fulfilled") {
            console.log(`Sesion de ${result.data.email} iniciada con éxito`)

            dispatch(setUser(result.data))
            insertSessions(result.data)
                    .then((result)=>console.log("Éxito al guardar usuario en la db",result))
                    .catch((error)=>console.log("Error al guardar usuario en la db", error))
            
            setUserLog({
                email: "",
                password: ""
            })
        }
    }, [result])

    const handleSubmit = () => {
        triggerLogin(userLog)
    }

    const handleChange = (name, text) => {
        setUserLog({
            ...userLog,
            [name]: text
        });
    }
    return (
        <AuthContainer>
           <View style={styles.form}>
           <FormContainer cardWidth={{ width: '85%'}}>
                <View style={styles.headLogo}>
                    <Image
                        source={require('../../../assets/main-logoNew.png')}
                        style={styles.headImage}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.mainInputs}>
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor={'black'}
                        onChangeText={(text) => handleChange('email', text)}
                        keyboardType="email-address"
                        value={userLog.email}
                        style={styles.input}
                    />

                    <TextInput
                        placeholder="Password"
                        placeholderTextColor={'black'}
                        onChangeText={(text) => handleChange('password', text)}
                        value={userLog.password}
                        style={styles.input}
                        secureTextEntry

                    />

                    <Pressable onPress={handleSubmit}>
                        <SectionTitle text={'Enviar'} />
                    </Pressable>


                   <View style={styles.buttonContainer}>
                        <NavButton navigation={navigation} route={'Perfil'} text={'Perfil'} style={styles.loginButton}/>
                        <NavButton navigation={navigation} route={'Registro'} text={'Registrate'} style={styles.loginButton}/>
                   </View>


                </View>
                </FormContainer>
                </View>
        </AuthContainer>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    form:{ 
        flex: 1,
    },
    
    headLogo: {
        height: 100,
        width: '100%',
        alignItems: 'center',
        marginTop: 20

    },
    headImage: {
        height: 100,
        width: '60%',
        alignItems: 'center'
    },
    mainInputs: {
        //justifyContent: 'center',
        alignItems: 'center'
    },
   buttonContainer:{
    alignItems:'center',
   },
    input: {
        backgroundColor: colors.yellow,
        width: '50%',
        margin: 10,
        borderRadius:10,
        paddingHorizontal:10,
        fontSize:16,
        height:30,
    },
 
})