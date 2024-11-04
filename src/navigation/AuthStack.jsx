import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "../screens/auth/SignUpScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import ProfileScreen from "../screens/auth/ProfileScreen";
const Stack =  createNativeStackNavigator();

const AuthStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Registro" component={SignUpScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Perfil" component={ProfileScreen}/>
    </Stack.Navigator>
)

export default AuthStack