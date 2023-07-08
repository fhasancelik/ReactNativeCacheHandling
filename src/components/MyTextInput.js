import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const MyTextInput = ({placeholder, onChangeText, label,  leftIconName,rightIconName}) => {
  return (
    <View style={styles.mainnContainer}>
      <Text  style={styles.labelText}>{label}</Text>
      <TouchableOpacity onPress={()=>console.log('bassıldı')} style={styles.leftIconContainer}>
        <Icon name={leftIconName} size={25} />
      </TouchableOpacity>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={styles.inputBox}
        placeholderTextColor={'gray'}
      />
        <TouchableOpacity onPress={()=>console.log('bassıldı')} style={styles.rightIconContainer}>
        <Icon name={rightIconName} size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default MyTextInput;

const styles = StyleSheet.create({
  mainnContainer: {
    alignItems: 'flex-start',
    width: '100%',
    marginBottom:15
  },

  inputBox: {
  
    padding: 15,
    borderRadius: 15,
    color: 'green',
    width: '100%',
    paddingLeft: 35,
  },
  leftIconContainer: {
    position: 'absolute',
    left: 5,
    bottom: 15,
   zIndex:1000
  },
  rightIconContainer:{
    position:'absolute',
    right:5
    ,
    bottom:15
  },

  labelText:{
    marginBottom:5
  }
});
