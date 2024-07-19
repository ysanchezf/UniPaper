import React from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.icon} />
      <Text style={styles.title}>
        Bienvenido a Unipaper</Text>
      <Text style={styles.subtitle}>Tu papelería en tu bolsillo</Text>
      <TouchableOpacity 
        style={styles.startButton} 
        onPress={() => navigation.navigate('SignIn')}
      >
        <Text style={styles.startButtonText}>START</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  icon: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
  },
  startButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
