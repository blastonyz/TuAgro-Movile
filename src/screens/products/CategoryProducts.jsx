 import {useEffect, useState} from 'react'
 import { FlatList, Text, View, ActivityIndicator, Pressable,StyleSheet} from 'react-native'
 import { useSelector, useDispatch } from 'react-redux';
 import { useGetProductsByCategoryQuery } from '../../services/productsApi';
 import { setProductId } from '../../features/products/productsSlice';
 import ProductsCard from '../../components/ProductsCard';

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
        <ProductsCard
          item={item}
          navigation={navigation}
          dispatch={dispatch}
          setProductId={setProductId}
        />
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
            contentContainerStyle={styles.listContainer}  
            />

            }
            </>
   )
 }
 
 export default CategoryProducts

 const styles = StyleSheet.create({
   listContainer:{
    flexGrow: 1,
    paddingBottom: 10,
   }
 })