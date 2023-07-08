import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ChatScreen from '../../screens/bottomscreens/ChatScreen'
import Settings from '../../screens/bottomscreens/SettingsScreen'
import Icon from 'react-native-vector-icons/Ionicons'
const BottomNavigator = () => {

    const Bottom=createBottomTabNavigator()

  return (
<Bottom.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      return (
        <Icon
          name={route.name === "ChatScreen " ? "chatbubbles" : "settings"}
          color={color}
          size={size}
        />
      );
    },
  })}
>
<Bottom.Screen options={{headerShown:false}}  name='ChatScreen ' component={ChatScreen}/>
    <Bottom.Screen options={{headerShown:false}} name='SettingsScreen' component={Settings}/>

</Bottom.Navigator>
  )
}

export default BottomNavigator

const styles = StyleSheet.create({})