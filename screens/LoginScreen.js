import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await firebase.auth().signInWithEmailAndPassword(email, password);
      // You can handle the login success here
      console.log('User logged in:', response.user);
    } catch (error) {
      // Handle login failure
      console.error('Login failed:', error.message);
    }
  };

  const handleSignUpPress = () => {
    // Navigate to SignUpScreen
    navigation.navigate('SignUpScreen');
  };

  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} />
      <TouchableOpacity onPress={handleSignUpPress}>
        <Text style={styles.signUpText}>Didn't Sign Up? Sign up here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  signUpText: {
    marginTop: 10,
    color: 'blue',
  },
});

export default LoginScreen;
