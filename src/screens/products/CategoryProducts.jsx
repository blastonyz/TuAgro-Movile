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
            ListHeaderComponent={() => (

              <View style={styles.categriesMainContainer}>
                  <Text style={styles.categriesMaintitle}>{categoryFiltered[0].category}</Text>
              </View>
          )}
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
    marginTop:20,
   },
   categriesMainContainer: {
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 15,
    marginBottom:20
},
   categriesMaintitle: {
    fontSize: 22,
    fontWeight: '600',
    margin: 'auto',
    backgroundColor: '#EEE21C',
    borderRadius: 20,
    width: 240,
    textAlign: 'center',
    height: 40,
    paddingTop: 4,
    elevation: 5,
    fontFamily: 'ChelseaMarket',
},
 })