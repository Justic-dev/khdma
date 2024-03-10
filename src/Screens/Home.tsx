import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.headerContainer}>
        <StatusBar 
        backgroundColor={'#A4B0BD'}
        />
      <Text style={styles.txt}>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    txt: {
        fontSize: 36,
        fontFamily: 'NovaFlat-Regular',
        margin: 10,
    }
})