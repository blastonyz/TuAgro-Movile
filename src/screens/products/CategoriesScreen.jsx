import { View, Text, Pressable, FlatList, ActivityIndicator } from "react-native";
import { useGetCategoriesQuery } from "../../services/productsApi";
import { useDispatch } from "react-redux";
import { setCategory } from "../../features/products/productsSlice";

const CategorieScreen = ({navigation}) => {
    
    const { data: categories, error, isLoading } = useGetCategoriesQuery()

    //console.log('categ: ',categories);
    
    const dispatch = useDispatch()

        const categoriesRender = ({item}) => {
            return(
            <View>
                <Pressable onPress={() => {
                     dispatch(setCategory(item.title))
                    navigation.navigate('ProductosCategoria')}}>
                   <Text> {item.title}</Text>
                </Pressable>
            </View>
            )
        }

    return(
    <>
    {
        isLoading
        ?
        <ActivityIndicator size="large" color={"#39FF14"} />
        :
        error
        ?
        <Text>Error al cargar las categorías</Text>
        :

        <FlatList
        data={categories}
        keyExtractor={item => item.id.toString()}
        renderItem={categoriesRender}
        />
    }
</>)
}

export default CategorieScreen