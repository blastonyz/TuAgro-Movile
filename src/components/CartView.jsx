import { View, Pressable, Image, Text, StyleSheet} from "react-native"
import { colors } from "../utils/colors"
import  Icon  from "react-native-vector-icons/MaterialIcons"
import { useDispatch } from "react-redux"
import { removeItem } from "../features/cart/cartSlice"



const CartView = ({ cartItems }) => {
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(removeItem(id))
    }

    return (

        <View style={styles.productMain}>
           
            <View style={styles.priceSection}>
                <Text style={styles.maintitle}>{cartItems.title}</Text>
                <View style={styles.priceCont}>
                    <Text style={styles.priceText}>Precio: {cartItems.price} U$D</Text>
                </View>
                <Text style={styles.brandText}>Marca: {cartItems.brand}</Text>
                <Text style={styles.stockText}>Stock: {cartItems.stock}</Text>
                <Pressable onPress={() => handleDelete(cartItems.id)} style={styles.deleteItem}> 
                    <Text style={styles.deleteText}>Quitar</Text>
                    <Icon name="delete" size={25} color={'gray'}/>
                </Pressable>
            </View>

            <View style={styles.imgSection}>
                <Image
                    source={{ uri: `${cartItems.image}` }}
                    style={styles.cartImg}
                />
            </View>
        
        </View>
    )
}

export default CartView

const styles = StyleSheet.create({
    productMain: {
        flex: 1,
        flexDirection:'row',
        width: '90%',
        marginHorizontal: 'auto',
        marginTop: 20,
        marginBottom: 20,
        justifyContent:'space-between',
        borderColor:colors.gray,
        borderBottomWidth:2,
        borderTopWidth:2
    },
    maintitle: {
        fontSize: 14,
        fontWeight: '600',
        backgroundColor: colors.yellow,
        width: 'auto',
        textAlign: 'center',
        paddingTop: 4,
        elevation: 5,
        fontFamily: 'ChelseaMarket',
    },
    imgSection: {
        borderRadius: 10
    },
    priceSection: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '70%'
    },
    priceCont: {
        width: '100%',
        backgroundColor: colors.green,
    },
    priceText: {
        fontSize: 16,
        fontWeight: '500',
    },
    brandText: {
        backgroundColor:colors.softGreen,
        fontSize: 16,
        fontWeight: '500',
        width: '100%'

    },
    stockText: {
        backgroundColor:colors.greenShadow,
        fontSize: 16,
        fontWeight: '500',
        width: '100%'
    },
    deleteItem:{
        flexDirection:'row',
        backgroundColor:colors.softGreen,
       justifyContent:'space-around'
    },
    deleteText:{
        fontSize: 16,
        fontWeight: '500',
        color:colors.gray,
    },

    cartImg: {
        width: 100,
        height: '100%',
    },
})