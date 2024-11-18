import {View, Pressable, Image,StyleSheet,Text} from 'react-native'
import { colors } from '../utils/colors'

const CategorieCard = ({ item, dispatch, setCategory, navigation }) => {
    return (
        <View style={styles.categorieContainer} >
           
            <Pressable onPress={() => {
                dispatch(setCategory(item.title))
                navigation.navigate('ProductosCategoria')
            }}>
                <View style={styles.categorieCard}>
                    <Text style={styles.categorieTitle}>{item.title}</Text>
                    
                    <Image source={{ uri: item.image }} style={styles.categorieImgs} />
                </View>
            </Pressable>
        </View>
    )
}

export default CategorieCard;

const styles = StyleSheet.create({
    categorieCard: {
        flex: 1,
        margin: 20,
        borderColor: colors.gray,
        borderTopWidth: 2,
        borderBottomWidth: 7,
        borderRightWidth: 7,
        borderRadius: 20,
        borderLeftWidth: 2,
        height: '40dvh',
        width: 'auto',
        justifyContent:'center',
        alignSelf:'center',
    },
   
    categorieTitle: {
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
        borderRadius: 14,
        backgroundColor:colors.softGreen,
        borderColor: '#04B404',
        borderWidth: 2,
    },
    categorieImgs: {
        width: 160,
        height: 160,
        borderRadius: 10,
    }
})