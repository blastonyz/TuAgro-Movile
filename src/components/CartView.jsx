import { View, Pressable, Image, Text, StyleSheet} from "react-native"
import { colors } from "../utils/colors"
import SectionTitle from "./ui/SectionTItle"


const CartView = ({ cartItems }) => {
    //console.log('cart view: ', cartItems);

    return (

        <View style={styles.productMain}>
           
            <View style={styles.priceSection}>
                <Text style={styles.maintitle}>{cartItems.title}</Text>
                <View style={styles.priceCont}>
                    <Text style={styles.priceText}>Precio: {cartItems.price} U$D</Text>
                </View>
                <Text style={styles.brandText}>Marca: {cartItems.brand}</Text>
                <Text style={styles.stockText}>Stock: {cartItems.stock}</Text>

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

    cartImg: {
        width: 100,
        height: '100%',
    },
})