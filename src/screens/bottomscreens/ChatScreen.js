import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import ChatList from '../homeScreens/ChatList'
import Chat from '../homeScreens/Chat'

function ChatScreen() {
const Stack=createNativeStackNavigator()

  return (
   <Stack.Navigator>
    <Stack.Screen name='ChatList' component={ChatList} />
    <Stack.Screen name='Chat' component={Chat}/>
   </Stack.Navigator>
  )
}

export default ChatScreen