import { View, Text, FlatList, ActivityIndicator, StyleSheet, Image} from "react-native";
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
                                ListHeaderComponent={() => (

                            <View style={styles.titleContainer}>
                                <Image source={require('../../../assets/section-3.jpeg')}
                                style={styles.titleImg}
                                resizeMode="cover"/>
                                            <Text style={styles.categriesMaintitle}>Productos</Text>
    
                                 
                            </View>
                                )}
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
        marginTop: 15,
    },
    titleImg:{
        height:150,
        zIndex:-10
    },

    categriesMaintitle: {
        fontSize: 22,
        fontWeight: '600',
        backgroundColor: '#EEE21C',
        borderRadius: 20,
        width: 240,
        textAlign: 'center',
        height: 40,
        paddingTop: 4,
        elevation: 5,
        fontFamily: 'ChelseaMarket',
        justifyContent: 'center',
        alignItems: 'center',
        position:'absolute',
        top:50,
        marginLeft:'20%',
    },
    listContent: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // gap: 5,
        //  margin: 10,
        paddingHorizontal: 0,
    },
})