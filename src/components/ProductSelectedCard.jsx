import { View, Pressable, Image, Text, StyleSheet, ScrollView } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"

const ProductSelectedCard = ({ productSelected, navigation, addItem, dispatch }) => {
    return (
        <ScrollView>
        <View style={styles.productMain}>
            <Text style={styles.maintitle}>{productSelected.title}</Text>
            <View style={styles.imgSection}>

                <View style={styles.priceSection}>
                    
                  <View style={styles.priceCont}>
                      <Text style={styles.priceText}>Precio: {productSelected.price} U$D</Text>
                </View>
                    <Text style={styles.brandText}>Marca: {productSelected.brand}</Text>
                    <Text style={styles.stockText}>Stock: {productSelected.stock}</Text>

                </View>
                <Image
                    source={{ uri: `${productSelected.image}` }}
                    style={{ width: 250, height: 250 }}
                />

            </View>
            <Text style={styles.descriptionText}>Descripcion: {productSelected.longDescription}</Text>

            <View style={styles.buttonsContainer}>
                <Pressable onPress={() => {
                    dispatch(addItem(productSelected))

                }}>
                    <View style={styles.addContainer}>
                        <Text style={styles.addText}>Agregar</Text>
                        <Icon name="add-shopping-cart" size={50} color={'green'} />
                    </View>
                </Pressable>

                <Pressable onPress={() => {
                    navigation.navigate('Carrito')
                }}>
                    <View style={styles.addContainer}>
                        <Text style={styles.addText}>Ver Carrito</Text>
                        <Icon name="arrow-right" size={50} color={'green'} />
                    </View>

                </Pressable>
            </View>
        </View>
        </ScrollView> 
    )
}

export default ProductSelectedCard

const styles = StyleSheet.create({
    productMain: {
        flex: 1,
        width: '90%',
        marginHorizontal: 'auto',
        marginTop: 20,
        marginBottom:20,
        //justifyContent:'space-around',
    },
    maintitle: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 20,
        backgroundColor: '#EEE21C',
        borderRadius: 20,
        width: 'auto',
        textAlign: 'center',
        height: 'auto',
        paddingTop: 4,
        elevation: 5,
        fontFamily: 'ChelseaMarket',
    },
    imgSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25,
        borderColor:'gray',
        borderWidth:2,
        borderRadius:10
    },
    priceSection: {
        flexDirection: 'column',
        justifyContent:'space-between',
        width:'37%'
    },
    priceCont:{
        width:'100%',
        backgroundColor:'rgba(4, 180, 4, 0.7)',
    },
    priceText: {
        fontSize:16,
        fontWeight:'500',
    },
    brandText: {
        backgroundColor:'rgba(4, 180, 4, 0.6)',
        fontSize:16,
        fontWeight:'500',
        width:'100%'
        
    },
    stockText: {
        backgroundColor:'rgba(250, 150, 14, 0.7)',
        fontSize:16,
        fontWeight:'500',
        width:'100%'
    },
    descriptionText: {
        marginTop: 20,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        borderColor:'gray',
        borderWidth:2,
        borderRadius:20,
        backgroundColor:'rgba(4, 180, 4, 0.8)',
    },
    addContainer: {
        flexDirection: 'row',
        backgroundColor: '#EEE21C',
        borderRadius: 15,
        width: 110
    },

    addText: {
        paddingVertical: 15
    },
})