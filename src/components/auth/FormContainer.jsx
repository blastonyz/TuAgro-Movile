
import { View, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const FormContainer = ({children,cardWidth = {}}) => {
    return (
        <View style={[styles.mainProfile,cardWidth]}>
            {children}
        </View>    
    )
}

export default FormContainer

const styles = StyleSheet.create({
    mainProfile: {
        heigth:'55%',
        alignSelf: 'center',
        marginTop: 20,
        borderWidth: 2,
        borderColor: 'yellow',
        borderRadius: 20,
        backgroundColor: colors.softGreen
    },
})