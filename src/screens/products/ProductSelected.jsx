import { useState, useEffect } from "react"
import { Text,ActivityIndicator } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import { useGetProductQuery } from "../../services/productsApi.js"
import { addItem } from "../../features/cart/cartSlice.js"
import ProductSelectedCard from "../../components/ProductSelectedCard.jsx"
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
         <ProductSelectedCard 
         productSelected={productSelected}
         navigation={navigation}
         addItem={addItem}
         dispatch={dispatch}
         />
      }
    </>
  )

}

export default ProductSelected