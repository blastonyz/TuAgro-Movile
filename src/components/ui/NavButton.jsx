import { Pressable,StyleSheet } from "react-native";
import SectionTitle from "./SectionTItle";

const NavButton = ({navigation, route, text}) => {
    return(
        <Pressable onPress={() => navigation.navigate(route, { screen: route })} style={styles.pressLinks}><SectionTitle text={text}/></Pressable>
    )
}

export default NavButton

const styles = StyleSheet.create({
    pressLinks:{
        marginTop:25,
        width:'100%'}
})