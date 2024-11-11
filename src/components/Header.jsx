import React from 'react'
import {Image,Text,View, StyleSheet} from 'react-native'
import  MaterialIcon  from 'react-native-vector-icons/MaterialIcons'
const Header = () => {
  return (
        <View style={styles.headerContainer}>
         
          <View style={styles.contactContainer}>
            <MaterialIcon name='phone' size={20} color={'yellow'} style={styles.contactIcon}/>
            <Text style={styles.contactText}>+54 9 387 580 0070</Text>
          </View>
          <View style={styles.contactContainer}>
            <MaterialIcon name='phone' size={20} color={'yellow'} style={styles.contactIcon}/>
            <Text style={styles.contactText}>+54 9 381 542 4911</Text>
          </View>
        </View>
  )
}

const styles = StyleSheet.create({
    headerContainer: {
       flexDirection: 'row',
        width: '100%',
        height: 100, 
        backgroundColor:'#4CAF50',
        justifyContent: 'space-evenly'
      },
      contactContainer: {
       flexDirection:'row', 
       width:150,
       height:'auto',
       marginTop:60,
      },
      contactText: {
        fontSize: 13,
        fontWeight:'600'
      },
      contactIcon: {
        paddingRight:5,
      }
    });

export default Header