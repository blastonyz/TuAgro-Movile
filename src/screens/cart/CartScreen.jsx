import { View,Text, FlatList, Pressable, Alert, StyleSheet } from "react-native"
import { useSelector } from "react-redux"
import { usePostPurchaseMutation } from "../../services/purchaseApi";
import SectionTitle from "../../components/ui/SectionTItle";
import CartView from "../../components/CartView";

const CartScreen = () => {
    const cartItems = useSelector(state => state.cart.value.cartItems); 
    const user = useSelector(state=> state.auth.value.email)
   const [triggerPost, result] = usePostPurchaseMutation()
    
        const CartFooter = () => {
            const handlePurchase = () => {
                if (user) {
                    triggerPost({ cartItems, createdAt: Date.now() });
                } else {
                    Alert.alert("Debe registrarse para realizar la compra");
                }
            };
    
            return (
                <Pressable onPress={handlePurchase}> 
                    <Text>Comprar</Text>
                </Pressable>
            );
        };

    return(
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
                    ListFooterComponent={<CartFooter/>}
                />        
           </View>       
        ) : (
            <Text>No hay items en el carrito</Text>
        )
    );
}

export default CartScreen

const styles = StyleSheet.create({
    cartContainer:{
        marginTop:20
    },
})