import { useState, useEffect } from "react"
import { View, Text, Pressable, Image, ActivityIndicator } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import { useGetProductQuery } from "../../services/productsApi.js"
import { addItem } from "../../features/cart/cartSlice.js"
const ProductSelected = ({ navigation }) => {
  const [productSelected, setProductSelected] = useState({})

  const product = useSelector(state => state.products.value.productId);


  const { data: productResponse, error, isLoading } = useGetProductQuery(product)

  const dispatch = useDispatch()

  useEffect(() => {
    if (productResponse) {
      setProductSelected(productResponse);
    }
  }, [productResponse])


  //console.log(productSelected.image);

  return (
    <>
      {
        isLoading
          ?
          <ActivityIndicator size="large" color={"#39FF14"}  />
          :
          error
            ?
            <Text>Error al cargar las categorías</Text>
            :
            <Pressable onPress={() => {
              dispatch(addItem(productSelected))
              navigation.navigate('Carrito')
            }}>
              <View>
                <Text>{productSelected.title}</Text>
                <Image
                  source={{ uri: `${productSelected.image}` }}
                  style={{ width: 250, height: 250 }}
                />
                <Text>Descripcion: {productSelected.longDescription}</Text>
                <Text>Precio: {productSelected.price} U$D</Text>
                <Text>Marca: {productSelected.brand}</Text>

              </View>
            </Pressable>
      }
    </>
  )

}

export default ProductSelected