import React from 'react'
import {Image,Text,View, StyleSheet} from 'react-native'
//
const Header = () => {
  return (
        <View style={styles.headerContainer}>
            <Image source={require('../../assets/back-header-grass.jpg')} style={styles.headerImage}/>
           
        </View>
  )
}

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: 50, // Ajusta esto para cubrir tanto el status bar como el header
        position: 'relative',
        color:'white',
      },
      headerImage: {
        width: '100%',
        height: '100%', // Que la imagen cubra todo el header incluyendo la StatusBar
        resizeMode: 'cover', // Ajusta la imagen sin distorsionar
      },
    });

export default Header