import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { isLogInState } from './store/modules/auth';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { todoQuery } from './store/modules/todo';

export default function App() {
  const [loading, setLoading] = useState(true);
  const onFinish = () => setLoading(false);
  // const todoLoadable = useRecoilValueLoadable(todosQuery);
  // const todoLoadable = useRecoilValue(todoQuery(3));
  // const isLogIn = useRecoilValue(isLogInState);
  // const preloadAssets = () => {
  //   const fontsToLoad = [Ionicons.font];
  //   const fontPromises = fontsToLoad.map((font) => Font.loadAsync(font));
  //   const imagesToLoad = [require("./assets/logo.png")];
  //   const imagePromises = imagesToLoad.map((image) => Asset.loadAsync(image));
  //   return Promise.all([...fontPromises, ...imagePromises]);
  // };
  // const preload = async () => {
  //   const token = await AsyncStorage.getItem("token");
  //   if (token) {
  //     isLoggedInVar(true);
  //     tokenVar(token);
  //   }

  //   return preloadAssets();
  // };
  // if (loading) {
  //   return (
  //     <AppLoading
  //       startAsync={preload}
  //       onError={console.warn}
  //       onFinish={onFinish}
  //     />
  //   );
  // }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'black' }}>Work!!</Text>
    </View>
  );
}
