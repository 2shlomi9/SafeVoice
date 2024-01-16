// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VideoScreen from './screens/VideoScreen';
import HomeScreen from './screens/HomeScreen';
import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';
import { app, analytics } from './config'; // Ensure config is imported

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="VideoScreen">
        <Stack.Screen name="VideoScreen" component={VideoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
