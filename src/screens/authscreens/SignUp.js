import React, { useState } from "react";
import { Text, View } from "react-native";
import { TextInput, Button, Subheading } from "react-native-paper";
import firestore from '@react-native-firebase/firestore'
import { useNavigation } from "@react-navigation/core";
import auth from '@react-native-firebase/auth'
const SignUp = () => {
  const [newUser,setNewUser]=useState({
    userName:'',
    userEmail:'',
    userPassword:'',
    userPhoto:''

  })

  const onChangeText=(key,value)=>{
    setNewUser({...newUser,[key]:value})
  }

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigation = useNavigation();


  const saveUser = (user,uid)=> {
    firestore()
      .collection('Users')
      .doc(`${uid}`).collection('UserInfo').doc('Info')
      .set(user)
      .then(() => {
        console.log('Product Added');
      });
  };

  const createAccount = async () => {
    setIsLoading(true);



    auth()
    .createUserWithEmailAndPassword(newUser.userEmail, newUser.userPassword)
    .then(() => {
      console.log('User account created & signed in!');

saveUser(newUser,auth().currentUser.uid)


    }).catch(error=>{
      setIsLoading(false)
      setError(error.message)
    })


  };

  return (
    <View style={{ margin: 16 }}>
      {!!error && (
        <Subheading
          style={{ color: "red", textAlign: "center", marginBottom: 16 }}
        >
          {error}
        </Subheading>
      )}
      <TextInput
        label="Name"
        value={newUser.userName}
        onChangeText={(text) => onChangeText('userName',text)}
      />
      <TextInput
        label="Email"
        style={{ marginTop: 12 }}
        value={newUser.userEmail}
        onChangeText={(text) => onChangeText('userEmail',text)}
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        style={{ marginTop: 12 }}
        value={newUser.userPassword}
        onChangeText={(text) => onChangeText('userPassword',text)}
        secureTextEntry
      />

<TextInput
        label="UserPhoto"
        style={{ marginTop: 12 }}
        value={newUser.userPhoto}
        onChangeText={(text) => onChangeText('userPhoto',text)}
        keyboardType="email-address"
      />
   
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 16,
        }}
      >
        <Button compact onPress={() => navigation.navigate("SignIn")}>
          Sign In
        </Button>
        <Button
          mode="contained"
          onPress={() => createAccount()}
          loading={isLoading}
        >
          Sign Up
        </Button>
      </View>
    </View>
  );
};

export default SignUp;