import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SignupScreen = () => {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <StatusBar backgroundColor={'#2B2B52'}/>
      <Text style={styles.headerTxt}>5 DMA</Text>
    </SafeAreaView>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
    headerContainer: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#2B2B52',
    },
    headerTxt: {
      fontSize: 36,
      fontFamily: 'Redressed-Regular',
      textAlign: 'center',
      margin: 10,
      color: '#EA7773'
    }
  })