import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import ProfileScreen from "../screens/user/ProfileScreen";
import NoUserScreen from "../screens/user/NoUserScreen";

const Stack = createNativeStackNavigator()

const UserStack = () => {
    const user = useSelector(state => state.auth.value.email);
    console.log(user);
    
    return (
        <Stack.Navigator>
            {user ? (
                <Stack.Screen 
                    name="Profile" 
                    component={ProfileScreen} 
                   
                    options={{ headerShown: false, unmountOnBlur: true }} 
                />
            ) : (
                <Stack.Screen 
                    name="NoUser" 
                    component={NoUserScreen} 
                    options={{ headerShown: false, unmountOnBlur: true }} 
                />
            )}
        </Stack.Navigator>
    );

}

export default UserStack

