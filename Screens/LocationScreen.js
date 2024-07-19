import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function LocationScreen() {
  const [location, setLocation] = useState(null);

  const handleConfirm = () => {
    Alert.alert('Location confirmed', 'Your location has been set.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Location</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={(e) => setLocation(e.nativeEvent.coordinate)}
      >
        {location && <Marker coordinate={location} />}
      </MapView>
      <Button title="Confirm" onPress={handleConfirm} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  map: {
    flex: 1,
    marginBottom: 20,
  },
});
