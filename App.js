import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AuthNavigator from './src/navigator/authnavigator/AuthNavigator';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigator from './src/navigator/bottomnavigator/BottomNavigator';
import {DataProvider} from './src/context/context';
import RootNavigator from './src/navigator/rootnavigator/RootNavigator';
import { Provider } from 'react-native-paper';

const App = () => {
  return (
    <DataProvider>
    <Provider>
    <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
    </DataProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
