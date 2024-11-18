import { Text, View, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const SectionTitle = ({text,size = 16, weight = "normal" }) => {
    
    
    return (
        <View style={styles.titleContainer}>
            <Text style={[styles.titleText, { fontSize: size, fontWeight: weight }]}>{text}</Text>
        </View>
    )
}


export default SectionTitle

const styles = StyleSheet.create({
    titleContainer: {
        height:40,
        backgroundColor:colors.yellow,
        borderRadius:20,
        width:'60%',
        justifyContent:'center',
        alignSelf:'center',
        elevation:5
    },
    titleText: {
        color:'black',
        textAlign:'center',
        fontFamily:'ChelseaMarket',
        paddingVertical:5,
        paddingHorizontal:10,
    },
})