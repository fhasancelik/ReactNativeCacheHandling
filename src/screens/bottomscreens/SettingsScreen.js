import React, { useEffect, useState, useContext} from "react";
import { Text, View ,StyleSheet} from "react-native";
import { Avatar, Title, Subheading, Button } from "react-native-paper";
import FastImage from 'react-native-fast-image';
import auth from '@react-native-firebase/auth'
import { DataContext } from "../../context/context";
const Settings = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const {userAvaible,setUserAvaible,setUserInfo,userInfo}=useContext(DataContext)



  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      setName(user?.displayName ?? "");
      setEmail(user?.email ?? "");
    });
  }, []);
const imagem=userInfo.userPhoto

console.log(imagem)
  return (
    <View style={{ alignItems: "center", marginTop: 16 }}>
     <FastImage
        style={styles.image}
        source={{
          uri:`${imagem}` ,
          priority: FastImage.priority.normal,
          cache: FastImage.cacheControl.immutable,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Title>{name}</Title>
      <Subheading>{email}</Subheading>
      <Button onPress={() => auth().signOut()}>Sign Out</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default Settings;