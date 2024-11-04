 import {useEffect, useState} from 'react'
 import { FlatList, Text, View, ActivityIndicator, Pressable, Image } from 'react-native'
 import { useSelector, useDispatch } from 'react-redux';
 import { useGetProductsByCategoryQuery } from '../../services/productsApi';
 import { setProductId } from '../../features/products/productsSlice';

 const CategoryProducts = ({navigation}) => {
  const [productsFiltered,setProductsFiltered] = useState("");

  const category = useSelector(state => state.products.value.categorySelected)
 
  
  const { data: categoryFiltered, error, isLoading } = useGetProductsByCategoryQuery(category)


  
  const dispatch = useDispatch()

  useEffect(() => {
    setProductsFiltered(categoryFiltered)
  },[categoryFiltered])  

  const RenderCategoryProducts = ({item}) => {
   
    
      return (
      <Pressable onPress={() => {
        dispatch(setProductId(item.id))
        navigation.navigate("Producto")
        }}>  
        <View>
           
                <Text>{item.title}</Text>

                <Image
                source={{uri: `${item.image}`}}
                style={{width: 150, height: 150}}
                />
                 <Text>Precio: {item.price} U$D</Text>
                <Text>Descripcion: {item.shortDescription}</Text>
               
                <Text>Marca: {item.brand}</Text>
                
           
        </View>
      </Pressable> 
      )
  }

   return (
    <>
            {
            isLoading
            ?
            <ActivityIndicator size="large" />
            :
            error
            ?
            <Text>Error al cargar las categorías</Text>
            :
            <FlatList
            data={productsFiltered}
            keyExtractor={item => item.id.toString()}
            renderItem={RenderCategoryProducts}
            />

            }
            </>
   )
 }
 
 export default CategoryProducts