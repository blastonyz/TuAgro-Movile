import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "../screens/auth/SignUpScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import UserStack from "./UserStack";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
 
    return(
    <Stack.Navigator>
        <Stack.Screen name="Registro" component={SignUpScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={LoginScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen name="Perfil" component={UserStack}
            options={{ headerShown: false }}
        />
    </Stack.Navigator>)
}

export default AuthStack