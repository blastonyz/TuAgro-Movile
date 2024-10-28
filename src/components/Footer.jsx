import React from 'react'
import { View,Text,StyleSheet } from 'react-native'

export const Footer = () => {
  return (
    <View style={styles.footer}>
        <Text>Footer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    footer:{
        position:'relative',
        bottom:0,
    }
})

export default Footer;