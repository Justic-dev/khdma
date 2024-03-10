import { StyleSheet } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from '../Screens/Home'
import LoginScreen from '../Screens/LoginScreen';
import SignupScreen from '../Screens/SignupScreen';


const Stack = createStackNavigator();

export default function MyStack() {

    return (
        <Stack.Navigator screenOptions={
            { headerShown: false }
        }
            initialRouteName="Login"
        >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />

        </Stack.Navigator>
    )
}


const styles = StyleSheet.create({})


{/* 
const Tab = createBottomTabNavigator()
<Tab.Navigator
screenOptions={{
    headerShown: false,
    tabBarStyle: {
        height: 70,
        position: 'absolute',
        bottom: 21,
        left: 16,
        right: 16,
        borderRadius: 20,
        backgroundColor: '#2B2B52'
    },
}}
>
<Tab.Screen name="Home" component={Home}
    options={{
        tabBarShowLabel: false,
        tabBarIcon: () => (
            <Icons name='home' />
        )
    }}
/>
<Tab.Screen name="Favorite" component={Favorite}
    options={{
        tabBarShowLabel: false,
        tabBarIcon: () => (
            <Icons name='heart' />
        ),
    }}
/>
<Tab.Screen name="Profile" component={Profile}
    options={{
        tabBarShowLabel: false,
        tabBarIcon: () => (
            <Icons name='person' />
        ),
    }}
/>
</Tab.Navigator> */}