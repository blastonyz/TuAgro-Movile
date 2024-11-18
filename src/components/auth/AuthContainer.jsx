import {StyleSheet} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { colors } from '../../utils/colors'

const AuthContainer = ({children}) =>{
   return (<LinearGradient
    colors={[colors.yellow,colors.softGreen,'white', colors.softGreen,colors.greenShadow,colors.yellow]}
    start={{ x: 0, y: 0 }} 
    end={{ x: 1, y: 1 }}   
    style={styles.mainSignUp}>
        {children}
     </LinearGradient>)      
}

export default AuthContainer

const styles = StyleSheet.create({
    mainSignUp:{
        flex:1,
    },
})    
