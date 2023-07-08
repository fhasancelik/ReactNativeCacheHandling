import { StyleSheet, Text, View ,Button, TouchableOpacity} from 'react-native'
import React from 'react'
import color from '../utils/color'

const SecondaryButton = ({title}) => {
  return (
<TouchableOpacity style={styles.buttonContainer}>
  <Text style={styles.buttonText}>{title}</Text>
</TouchableOpacity>
  )
}

export default SecondaryButton

const styles = StyleSheet.create({
  buttonContainer:{
    backgroundColor:color.btnSecondary,
    marginBottom:10,
    padding:20,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,


  },

  buttonText:{
    color:'black',
    fontWeight:'bold'
  }
})