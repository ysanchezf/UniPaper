import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function SignInScreen({ navigation }) {
  const handleLogin = () => {
    // Here you can add your authentication logic
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>
      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.googleButtonText}>Sign in with Google</Text>
      </TouchableOpacity>
      <TextInput style={styles.input} placeholder="Enter your phone number or email address" />
      <TextInput style={styles.input} placeholder="Enter your Password" secureTextEntry={true} />
      <Button title="Continue" onPress={handleLogin} />
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.link}>Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.link}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  googleButton: {
    backgroundColor: '#4285F4',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  googleButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  link: {
    color: '#007BFF',
    textAlign: 'center',
    marginTop: 10,
  },
});
