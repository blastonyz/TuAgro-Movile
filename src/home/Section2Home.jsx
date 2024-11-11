import { Image, Text,StyleSheet, View } from "react-native";
import Icon  from "react-native-vector-icons/MaterialIcons";

const Section2Home = () => {
    return(

    <View style={styles.secondMain}>

      <View style={styles.textsContainer}>
            <View style={styles.secondTextContainer}>
                <Text style={styles.secondTitle}>Nuestros Servicios</Text>
                <Image source={require('../../assets/icono-servicios.jpeg')} style={styles.imageServices}/>
            </View>

            <View style={styles.secondTextContainer}>
                <Text style={styles.secondText}>Venta de Insumos</Text>
                <Icon name='check-circle' color={'orange'} size={26} style={styles.secondIcon}/>
            </View>
            <View style={styles.secondTextContainer}>
                <Text style={styles.secondText}>Gestion de Comercio Exterior</Text>
                <Icon name='check-circle' color={'orange'} size={26} style={styles.secondIcon}/>
            </View>
            <View style={styles.secondTextContainer}>
                <Text style={styles.secondText3}>Asesoramiento Profesional sin costo</Text>
                <Icon name='check-circle' color={'orange'} size={26} style={styles.secondIcon}/>
            </View>
      </View>
          <View style={styles.secondImgCont}>
                <Image 
                source={require('../../assets/section2-3.jpeg')}
                resizeMode="contain"
                style={styles.secondSecImg}
                />
          </View>
    </View>
    )
}

export default Section2Home

const styles = StyleSheet.create({
    secondMain:{
        marginTop:0
    },
    textsContainer:{
        width:'82%',
        justifyContent:'center',
        margin:'auto',
        zIndex:10 
    },
    secondTextContainer:{
        height: 'auto',
        marginTop:25,
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:0,
    },
    secondTitle:{
        fontSize:22,
        fontWeight:'600',
        margin:'auto',
        backgroundColor:'#EEE21C',
        borderRadius:20,
        width:240,
        textAlign:'center',
        height:40,
        paddingTop:4,
        elevation:5,
        marginLeft:0,
        fontFamily:'ChelseaMarket',
    },
    imageServices:{
        width:65,
        height:65,
        borderRadius: 50,
        zIndex:-1,

    },
    secondText:{
        fontSize:18,
        fontWeight:'500',
    },
    secondText3:{
        fontSize:18,
        fontWeight:'500',
        overflow:'hidden',
        paddinRight: 2,
        height:50,
        width:'80%'
    },
    secondImgCont:{
        height: 400,
        width: '100%',
        opacity: 0.35,
        position: 'absolute',
        marginTop:125,
    },
    secondSecImg:{
        height: 400,
        width:'100%',
        zIndex:-10
    },
    secondIcon:{
        position:'absolute',
        right:0,

    }
    
})