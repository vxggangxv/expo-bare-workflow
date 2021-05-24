import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getTodo } from 'api/todo';
import { ApolloProvider, useReactiveVar } from '@apollo/client';
import client, { isLoggedInVar, tokenVar } from 'apollo';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { isLoggedInState, tokenState } from 'store/modules/auth';
import { NavigationContainer } from '@react-navigation/native';
import LoggedInNav from 'navigators/LoggedInNav';
import LoggedOutNav from 'navigators/LoggedOutNav ';

export default function App() {
  const [loading, setLoading] = useState(true);
  const onFinish = () => setLoading(false);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const setToken = useSetRecoilState(tokenState);
  // const isLoggedIn = useReactiveVar(isLoggedInVar);

  // useEffect(() => {
  //   // AsyncStorage.setItem('token', 'token');
  //   AsyncStorage.removeItem('token');
  // }, []);

  // assets
  const preloadAssets = () => {
    const fontsToLoad = [Ionicons.font];
    const fontPromises = fontsToLoad.map(font => Font.loadAsync(font));
    // const imagesToLoad = [require('./assets/logo.png')];
    const imagesToLoad = [
      require('assets/contents/main_bg.png'),
      require('assets/contents/craft5x.svg'),
      require('assets/contents/motion_app.svg'),
      require('assets/contents/dof_mark.svg'),
    ];
    const imagePromises = imagesToLoad.map(image => Asset.loadAsync(image));
    return Promise.all([...fontPromises, ...imagePromises]);
  };

  // 로그인 정보 가져오기
  const preload = async () => {
    const token = await AsyncStorage.getItem('token');
    console.log('token', token);
    if (token) {
      setIsLoggedIn(true);
      setToken(token);
      // isLoggedInVar(true);
      // tokenVar(token);
    }

    return preloadAssets();
  };

  if (loading) {
    return <AppLoading startAsync={preload} onError={console.warn} onFinish={onFinish} />;
  }

  return (
    // <View style={styles.container}>
    //   <Text>{isLoggedIn ? 'logIn' : 'logOut'}</Text>
    // </View>
    <NavigationContainer>{isLoggedIn ? <LoggedInNav /> : <LoggedOutNav />}</NavigationContainer>
    // <ApolloProvider client={client}>
    //   <NavigationContainer>{isLoggedIn ? <LoggedInNav /> : <LoggedOutNav />}</NavigationContainer>
    //   <View style={styles.container}>
    //     <Text>{isLoggedIn ? 'logIn' : 'logOut'}</Text>
    //   </View>
    // </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
