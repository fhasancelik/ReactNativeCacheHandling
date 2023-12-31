import React, { useContext, useState } from 'react';
import { Text, View } from "react-native";
import { TextInput, Button, Subheading } from "react-native-paper";
import Lottie from 'lottie-react-native'

import auth from '@react-native-firebase/auth'
import { DataContext } from '../../context/context';

import { useNavigation } from "@react-navigation/core";

const LoginView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const {setUserAvaible}=useContext(DataContext)

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigation = useNavigation();

  const signIn = async () => {
    setIsLoading(true);
    try {
      await auth().signInWithEmailAndPassword(email, password);
      navigation.popToTop();
    } catch (e) {
      setIsLoading(false);
      setError(e.message);
    }
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
        label="Email"
        style={{ marginTop: 12 }}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        label="Password"
        style={{ marginTop: 12 }}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 16,
        }}
      >
        <Button compact onPress={() => navigation.navigate("SignUp")}>
          Sign Up
        </Button>
        <Button mode="contained" onPress={() => signIn()} loading={isLoading}>
          Sign In
        </Button>
      </View>
    </View>
  );
  
};



export default LoginView;