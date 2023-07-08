import { StyleSheet, Text, View } from 'react-native'
import React, { useContext,useEffect ,useState} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DataContext } from '../../context/context'
import BottomNavigator from '../bottomnavigator/BottomNavigator'
import AuthNavigator from '../authnavigator/AuthNavigator'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';

const RootNavigator = () => {

const {userAvaible,setUserAvaible}=useContext(DataContext)

  // Handle user state changes
  function onAuthStateChanged(user) {
    if(user){
  
     setUserAvaible(true)
    }else{
     setUserAvaible(false)
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

const RootStack=createNativeStackNavigator()

const[userr,setUserr]=useState(null)

function onResult(QuerySnapshot) {
  console.log('Got Users collection result.');
  setUserr(QuerySnapshot._data)

}

function onError(error) {
  console.error(error);
}

useEffect(()=>{


  firestore().collection('Users').doc('Ayşe Albayrak').onSnapshot(onResult, onError);

},[])

console.log(userr)
  return (
<>
{userAvaible==true?(<BottomNavigator/>) :(<AuthNavigator/>)}</>
  )
}

export default RootNavigator

const styles = StyleSheet.create({})

