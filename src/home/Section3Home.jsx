import { Text, View, ImageBackground,StyleSheet, Pressable } from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons'

const Section3Home = () => {
    return(
        <ImageBackground source= {require('../../assets/section-3.jpeg')}
        style={styles.imageBack}
        >
            <View style={styles.overlay} />
            <View style={styles.thirdMain}>
                <View style={styles.text1Cont}>
                    <Text style={styles.text1}>¿Buscás el Producto Perfecto? ¡Te ofrecemos asesoramiento {''}
                    <Text style={styles.text2}>SIN COSTO!</Text>
                    </Text>
                </View>
               
                <View style={styles.text3Cont}>
                    <Text style={styles.text3}>Estas a unos pasos de conseguir los Productos mas adecuados </Text>
                </View>
                <View style={styles.text1Cont}>
                    <Text style={styles.text1}>Tu campo merece lo mejor</Text>
                </View>
                <View style={ styles.contactSec3Container}>
                   <Pressable style={styles.contactSec3}>
                    <Text style={styles.contactSec3Text}>Te Contactamos</Text>
                    <Icon name='arrow-forward' size= {24} color={'black'} style={styles.arrow}/>
                   </Pressable>
                </View>
            </View>
        </ImageBackground>
    )
}

export default Section3Home

const styles = StyleSheet.create({
    thirdMain:{
        height: 500,
        justifyContent:'space-evenly',
        alignItems:'center',
        zIndex:10,
       
    },
    imageBack:{
        height:500,
        zIndex:-3,
    },
    
    overlay:{
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(50, 50, 50, 0.5)',
        height:500
    },
    text1Cont:{
        width:'80%',
        height:'auto',
        alignItems:'center',
        zIndex:50,
    },
    text1:{
        fontSize:24,
        color:'#FFFFFF',
        fontWeight:'bold',
        
    },
    text2:{
        fontSize:20,
        color:'#E6DA15',
        alignItems:'center',
        marginLeft:'auto'
    },
    text3Cont:{
        width:'90%',
        height:'auto',
        alignItems:'center',
    },
    text3:{
        fontSize:14,
        color:'#FFFFFF',
        fontWeight:'bold',
        width:'80%',
    },
    contactSec3Container:{
        backgroundColor:'#E6DA15',
        alignItems:'center',
        borderRadius:25,
        width:'50%',
        
    },
    contactSec3:{
        flexDirection:'row',
        width:'90%',
        justifyContent:'center'
    },
    contactSec3Text:{
        color:'black',
        fontSize: 17,
        fontWeight:'500',
        height:40,
        paddingTop:4,
    },
    arrow:{
        paddingLeft:10,
        paddingTop:5,
        alignItems:'flex-end'
    }
})