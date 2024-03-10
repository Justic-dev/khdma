import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren, useState } from 'react'
import MyTextInput from '../components/MyTextInput'
import MyButton from '../components/MyButton'

type ForgetPasswordProps = PropsWithChildren<{
  navigation: any;
}>

const ForgetPassword = ({ navigation }: ForgetPasswordProps) => {

  const [email, setEmail] = useState<string>('')

  return (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>5 DMA</Text>
          <Text style={styles.fPasswordTxt}>forget password?</Text>
          <Text style={styles.fPasswordSmallTxt}>enter your email address and we'll send you a link to reset your password</Text>
          <MyTextInput value={email} onChangeText={(text: string) => setEmail(text)} placeholder='Email' ></MyTextInput>
          <MyButton title='reset password' onPress={() => (navigation.replace('Login'))}/>
        </View>
    </View>
  )
}

export default ForgetPassword

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#758AA2',
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    height: 450,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  title: {
    fontFamily: 'Audiowide-Regular',
    fontSize: 36,

  },
  fPasswordTxt: {
    margin: 20,
    fontSize: 20,
    fontFamily: 'NovaFlat-Regular',
  },
  fPasswordSmallTxt: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'NovaFlat-Regular',    
  },
})