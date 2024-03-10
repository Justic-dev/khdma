import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren, useState } from 'react'
import MyTextInput from '../components/MyTextInput'
import MyButton from '../components/MyButton'

type SignupScreenProps = PropsWithChildren<{
  navigation: any;
}>

const SignupScreen = ({ navigation }: SignupScreenProps) => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')

  return (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>5 DMA</Text>
          <MyTextInput value={email} onChangeText={(text: string) => setEmail(text)} placeholder='Email' ></MyTextInput>
          <MyTextInput value={password} onChangeText={(text: string) => setPassword(text)} placeholder='Password' secureTextEntry ></MyTextInput>
          <MyTextInput value={confirmPassword} onChangeText={(text: string) => setConfirmPassword(text)} placeholder='Confirm password' secureTextEntry ></MyTextInput>
          <MyButton title='Sign up' onPress={() => (navigation.replace('Login'))}/>
        </View>
      <Pressable
        style={styles.button}
        onPress={() => ( navigation.navigate('Login') )}
      >
        <Text style={styles.buttonTxt}>
          Already have an account? Login
        </Text>
      </Pressable>
    </View>
  )
}

export default SignupScreen

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
  button: {
    flex: 1/3,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonTxt: {
    justifyContent: 'flex-end',
    marginRight: 10,
    color: 'white',
    marginBottom: 15,
    fontFamily: 'NovaFlat-Regular'
  },
  forgetButton: {

  },
  forgetButtonTxt: {

  }
})