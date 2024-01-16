import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateToLogin = () => {
    navigation.navigate('LoginScreen'); // Navigate to LoginScreen
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to Home Screen!</Text>
      <Button title="Go to Login" onPress={navigateToLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
