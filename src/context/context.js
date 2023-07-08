import {FlatListComponent, StyleSheet, Text, View} from 'react-native';
import React, {createContext, useState, useContext} from 'react';
import {create} from 'react-test-renderer';

const DataContext = createContext();

const DataProvider = ({children}) => {
  const [userAvaible, setUserAvaible] = useState(true);
  const [productDetailInfo, setProductDetailInfo] = useState();
  const [userInfo, setUserInfo] = useState({
});

  return (
    <DataContext.Provider
      value={{
        userAvaible,
        setUserAvaible,
        productDetailInfo,
        setProductDetailInfo,
        userInfo,
        setUserInfo
      }}>
      {children}
    </DataContext.Provider>
  );
};

export {DataContext, DataProvider};
