import { useState, useEffect } from "react"
import { View,Text, Pressable } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import { useGetProductQuery } from "../services/productsApi"
const ProductSelected = ({navigation}) => {
    const [productSelected, setProductSelected] = useState({})

    const product = useSelector(state => state.products.value.productId);
 
    
    const { data: productResponse, error, isLoading } = useGetProductQuery(product)

    const dispatch = useDispatch()
    
    useEffect(() =>{
        if (productResponse) {
            setProductSelected(productResponse);
          }
    },[productResponse])
  
    

  return (
    <Pressable onPress={() => {dispatch(setCategory(item.title))
        navigation.navigate('Carrito')}}>
            <View>
                <Text>{productSelected.title}</Text>
            </View>
    </Pressable>
  )

}

export default ProductSelected