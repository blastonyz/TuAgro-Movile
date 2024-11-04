import { View,TextInput, Pressable, Text } from "react-native";
import { useState, useEffect } from "react";
import { useLoginMutation } from "../../services/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/auth/authSlice";

const LoginScreen = ({navigation}) => {


    const [userLog, setUserLog] = useState({
        email:"",
        password:""
    })

    const [triggerLogin, result] = useLoginMutation()

    const dispatch = useDispatch()

    useEffect(()=>{
        if(result.status==="rejected"){
            console.log("Error al agregar el usuario", result.error.data?.error || result.error)
        }else if(result.status==="fulfilled"){
            console.log(`Sesion de ${result.data.email} iniciada con éxito`) 
            
            
            dispatch(setUser(result.data))
        }
    },[result])

    const handleSubmit = () => {
        triggerLogin(userLog)
    }

    const handleChange = (name,text) => {
        setUserLog({
            ...userLog,
            [name]: text
        });
    }
  return (
    <View>
     <TextInput
            placeholder="Email"
            placeholderTextColor={'black'}
            onChangeText={(text) =>handleChange('email', text)}
            keyboardType="email-address"
            value={userLog.email}

        />

        <TextInput
            placeholder="Password"
            placeholderTextColor={'black'}
            onChangeText={(text) =>handleChange('password',text)}
            value={userLog.password}
            secureTextEntry

        />

        <Pressable onPress={handleSubmit}>
            <Text>Enviar</Text>
        </Pressable>

        <Pressable onPress={()=>(navigation.navigate("Perfil"))}>
            <Text>Perfil</Text>
        </Pressable>

    </View>
  )
}

export default LoginScreen