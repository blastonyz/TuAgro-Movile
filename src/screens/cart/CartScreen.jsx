import { View,Text, FlatList, Pressable } from "react-native"
import { useSelector } from "react-redux"
import { usePostPurchaseMutation } from "../../services/purchaseApi";


const CartScreen = () => {
    const cartItems = useSelector(state => state.cart.value.cartItems); 
   const [triggerPost, result] = usePostPurchaseMutation()
    //console.log('Cart Items:', cartItems);
    
    
    const CartFooter = () => {
        return(
            <Pressable
            onPress={()=>{
               triggerPost({cartItems, createdAt: Date.now()})      
            }} 
         > 
             <Text>Comprar</Text>
         </Pressable>
        )
    }

    return(
        cartItems && cartItems.length > 0
        ? (
            <FlatList
                data={cartItems}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => (
                    <Text key={index}>{item.title}</Text>
                )}
                ListFooterComponent={<CartFooter/>}
            />               
        ) : (
            <Text>No hay items en el carrito</Text>
        )
    );
}

export default CartScreen