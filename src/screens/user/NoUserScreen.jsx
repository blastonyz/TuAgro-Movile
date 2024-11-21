import {  View, StyleSheet } from "react-native"
import NavButton from "../../components/ui/NavButton"
import AuthContainer from "../../components/auth/AuthContainer"
import FormContainer from "../../components/auth/FormContainer"
import SectionTitle from "../../components/ui/SectionTItle"



const NoUserScreen = ({navigation}) => {
    

    return (
        <AuthContainer style={styles.mainNoUs}>
            <FormContainer cardWidth={{width:'85%'}}>
                <SectionTitle text={'No hay usuario '}/>
                <NavButton navigation={navigation} route={'Resgistro'} text={'Registrate'}/>
                <NavButton navigation={navigation} route={'Login'} text={'Login'}/>
            </FormContainer>
        </AuthContainer>
    );
};

export default NoUserScreen

const styles = StyleSheet.create({
    mainNoUs:{
        flex:1,
    },
    authLinks: {
        paddingVertical: 25,
        justifyContent: 'space-between',
        width: '100%'
    },
    noUserText: {
        fontSize: 24,
        textAlign: 'center'
    },
})