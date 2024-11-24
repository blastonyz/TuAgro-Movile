import { View, Text, FlatList, Pressable, Alert, StyleSheet } from "react-native"
import { useSelector } from "react-redux"
import { usePostPurchaseMutation } from "../../services/purchaseApi";
import SectionTitle from "../../components/ui/SectionTItle";
import CartView from "../../components/CartView";
import { colors } from "../../utils/colors";



const CartScreen = () => {
    const cartItems = useSelector(state => state.cart.value.cartItems);
    const user = useSelector(state => state.auth.value.email)
    const total = useSelector(state => state.cart.value.total);
  
    const [triggerPost, result] = usePostPurchaseMutation()

    const CartFooter = () => {
        const handlePurchase = () => {
            if (user) {
                triggerPost({ cartItems, createdAt: Date.now(), user, total });
                Alert.alert("Gracias por Tu Compra!");
            } else {
                Alert.alert("Debe registrarse para realizar la compra");
            }
        };

        return (
            <View style={styles.cartPraductsFooter}>
                <Text style={styles.textTotal}>Total: {total} U$D</Text>

                <Pressable onPress={handlePurchase} style={styles.buyButton}>
                    <Text style={styles.buyButtonText}>Comprar</Text>
                </Pressable>

            </View>
        );
    };

    return (
        cartItems && cartItems.length > 0
            ? (

                <View style={styles.cartContainer}>
                    <SectionTitle text={'Tus Productos'}
                        size={22}
                        weight={'600'}
                    />
                    <FlatList
                        data={cartItems}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <CartView cartItems={item} />
                        )}
                        ListFooterComponent={<CartFooter />}
                    />

                </View>
            ) : (
                <View style={styles.noCartItems}>
                    <SectionTitle text={'Carrito Vacio'} />
                </View>
            )
    );
}

export default CartScreen

const styles = StyleSheet.create({
    cartContainer: {
        marginTop: 20
    },
    cartPraductsFooter: {
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    noCartItems: {
        marginTop: 30
    },
    textTotal:{
        height:30,
        width:'auto',
        paddingHorizontal:5,
        paddingTop:2,
        borderRadius:20,
        fontFamily:'ChelseaMarket',
        fontSize:16,
        backgroundColor:colors.greenShadow
    },
    buyButton:{
        height:30,
        width:'auto',
        paddingHorizontal:5,
        paddingTop:2,
        borderRadius:20,
        backgroundColor:'orange'
    },
    buyButtonText:{
        paddingHorizontal:5,
        paddingTop:2,
        fontFamily:'ChelseaMarket',
        fontSize:16,
    }
})