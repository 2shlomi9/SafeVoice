import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { getAuth } from 'firebase/auth'; // Import getAuth directly

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth(); // Get Firebase auth instance

  const handleSignUp = async () => {
    try {

      const auth = getAuth();
      const response = await auth.signInWithEmailAndPassword(email, password);
      // Update user display name (optional)
      await auth.updateProfile(userCredential.user, {
        displayName: username,
      });

      // You can do additional tasks here (e.g., save user data to Firebase Firestore)

      Alert.alert('Success', 'Account created successfully!');

      // Navigate to the login screen
      navigation.navigate('LoginScreen');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign Up</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={handleSignUp}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
