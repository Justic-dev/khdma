import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type MyButtonProps = {
  title: string;
  onPress: () => void;
}

const MyButton = ({title, onPress}: MyButtonProps) => {
  return (
    <TouchableOpacity style={styles.container}
      onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default MyButton

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#758AA2',
    borderRadius: 30,
    marginTop: 10,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'NovaFlat-Regular',
  }
})