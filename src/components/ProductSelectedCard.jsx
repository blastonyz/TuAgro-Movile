import { View, Pressable, Image, Text, StyleSheet, ScrollView } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import { colors } from "../utils/colors"

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
                    style={styles.productImage}
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
        backgroundColor:colors.softGreen,
        borderRadius:20,
        borderColor:colors.gray,
        borderWidth:3,
    },
    maintitle: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 20,
        backgroundColor: colors.yellow,
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
        borderColor:colors.gray,
        borderTopWidth:2,
        borderBottomWidth:2,
        borderRadius:10
    },
    productImage:{
        width:'60%',
        height:200
    },
    priceSection: {
        flexDirection: 'column',
        justifyContent:'space-between',
        width:'37%'
    },
    priceCont:{
        width:'100%',
        backgroundColor:colors.green,
        borderTopLeftRadius:8
    },
    priceText: {
        fontSize:16,
        fontWeight:'500',
    },
    brandText: {
        backgroundColor:colors.greenShadow,
        fontSize:16,
        fontWeight:'500',
        width:'100%'
        
    },
    stockText: {
        backgroundColor:colors.yellow,
        fontSize:16,
        fontWeight:'500',
        width:'100%',
        borderBottomLeftRadius:8,
    },
    descriptionText: {
        marginTop: 20,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        borderRadius:20,
        backgroundColor:colors.softGreen,
    },
    addContainer: {
        flexDirection: 'row',
        backgroundColor: colors.yellow,
        borderRadius: 15,
        width: 110
    },

    addText: {
        paddingVertical: 15
    },
})