import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PropsWithChildren } from 'react'

import Icon from 'react-native-vector-icons/Octicons';


type IconsProps = PropsWithChildren<{
    name: String;
}>

const Icons = ({ name }: IconsProps) => {
    switch (name) {

        case 'home':
            return <Icon name='home' style={styles.icon} size={25} color='#EA7773' />

        case 'person':
            return <Icon name='person' style={styles.icon} size={25} color='#EA7773' />

        case 'heart':
            return <Icon name='heart' style={styles.icon} size={25} color='#EA7773' />

        default:
            return
    }
}

const styles = StyleSheet.create({
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})


export default Icons