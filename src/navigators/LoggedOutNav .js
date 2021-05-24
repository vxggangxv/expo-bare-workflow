import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';
import Welcome from 'screens/Welcome';

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
        name="Welcome"
        component={Welcome}
        options={{
          headerTitle: false,
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
