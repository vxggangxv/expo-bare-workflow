import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';
import WelcomeIn from 'screens/WelcomeIn';

const Stack = createStackNavigator();

export default function LoggedOutNav(props) {
  return (
    <Stack.Navigator
      screenOptions={
        {
          // headerBackTitleVisible: false,
          // headerTintColor: 'white',
        }
      }
    >
      <Stack.Screen
        name="WelcomeIn"
        component={WelcomeIn}
        options={{
          headerTitle: false,
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
