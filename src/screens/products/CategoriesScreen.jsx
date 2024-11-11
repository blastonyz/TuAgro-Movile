import { View, Text, FlatList, ActivityIndicator, StyleSheet, Image } from "react-native";
import { useGetCategoriesQuery } from "../../services/productsApi";
import { useDispatch } from "react-redux";
import { setCategory } from "../../features/products/productsSlice";
import CategorieCard from "../../components/CategorieCard";
const CategorieScreen = ({ navigation }) => {

    const { data: categories, error, isLoading } = useGetCategoriesQuery()

    //console.log('categ: ',categories);


    const dispatch = useDispatch()

    const categoriesRender = ({ item }) => {
        return (
            <CategorieCard
            item={item}
            dispatch={dispatch}
            setCategory={setCategory}
            navigation={navigation}
        />) 
    }

    return (
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
                        <View style={styles.categoriesMainContainer}>
                            <FlatList
                                data={categories}
                                keyExtractor={item => item.id.toString()}
                                renderItem={categoriesRender}
                                contentContainerStyle={styles.listContent}
                                numColumns={2}
                            />
                        </View>
            }
        </>)
}

export default CategorieScreen


const styles = StyleSheet.create({
    categoriesMainContainer: {
        flex: 1,
    },
    listContent: {
        width: '100%',
        justifyContent:'center',
        alignItems: 'center',
        gap:5,
        margin:10
    },
})