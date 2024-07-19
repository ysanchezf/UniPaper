import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function NotificationsScreen() {
  const data = [
    { id: '1', type: 'Promotion', message: 'Invite friends - Get 3 coupons each!' },
    { id: '2', type: 'System', message: 'Tarjeta Agregada exitosa' },
    { id: '3', type: 'System', message: 'Tu Pedido se ha realizado con éxito!' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemType}>{item.type}</Text>
            <Text style={styles.itemMessage}>{item.message}</Text>
          </View>
        )}
      />
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
  item: {
    padding: 15,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  itemType: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemMessage: {
    fontSize: 16,
  },
});
