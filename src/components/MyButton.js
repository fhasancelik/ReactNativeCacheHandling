import { StyleSheet, Text, View ,Button, TouchableOpacity} from 'react-native'
import React from 'react'
import color from '../utils/color'

const MyButton = ({title,onPress}) => {
  return (
<TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
  <Text style={styles.buttonText}>{title}</Text>
</TouchableOpacity>
  )
}

export default MyButton

const styles = StyleSheet.create({
  buttonContainer:{
    backgroundColor:color.btnPrimary,
    marginBottom:10,
    padding:20,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',

  },

  buttonText:{
    color:'white',
    fontWeight:'bold'
  }
})