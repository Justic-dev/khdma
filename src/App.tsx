import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar 
      backgroundColor={'#2B2B52'}
      />
      <Text style={styles.txt}>5 DMA</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2B2B52',
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Raleway-Italic-VariableFont_wght',
    textAlign: 'center',
    margin: 10,
    color: '#EA7773'
  }
})