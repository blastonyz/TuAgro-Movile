import { View, StyleSheet, Image, Pressable, Text } from "react-native"
import { colors } from "../utils/colors";

const ProductsCard = ({item,navigation,dispatch,setProductId}) => {
   
    return (
    <Pressable onPress={() => {
      dispatch(setProductId(item.id))
      navigation.navigate("Producto")
      }}>  
       <View style={styles.cardContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.productTitle}>{item.title}</Text>
          <Text style={styles.productPrice}>Precio: {item.price} U$D</Text>
          <Text style={styles.productBrand}>Marca: {item.brand}</Text>
          <Text style={styles.productDescription} numberOfLines={4} ellipsizeMode="tail">
            Descripción: {item.shortDescription}
          </Text>
        </View>
        <View style={styles.rightContainer}>
        <Image source={{ uri: `${item.image}` }} style={styles.productImage} />
    
        </View>
      </View>
    </Pressable>
  );
};

export default ProductsCard;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    borderColor: colors.gray,
    elevation: 5,
    borderWidth: 2,
    borderRadius: 8,
    marginVertical: 8,
    width:'90%',
    marginLeft:10,
    alignSelf:'center',
    backgroundColor: colors.white,
  },
  leftContainer: {
    flex: 1,
   justifyContent:'space-between',
  },
  productTitle: {
    fontSize: 15,
    fontWeight: '600',
    backgroundColor:colors.green,
    borderTopLeftRadius: 7,
    textAlign:'center',
    },
  productPrice: {
    color: 'black',
    marginBottom: 4,
    fontWeight:'500',
    fontSize:14,
    backgroundColor:colors.softGreen,
    width:'60%',
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7, 
    textAlign:'center'
  },
  productBrand: {
    color: colors.gray,
    backgroundColor:colors.yellow,
    fontWeight:'500',
    fontSize:16,
    width:'70%',
    marginBottom: 4,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7, 
    paddingLeft:3,
   },

  productDescription: {
    color: '#333',
    paddingLeft:10,
    paddingBottom:5,
  },
  productImage: {
    width: 180,
    height: 180,
    borderRadius: 8,
  },

});

