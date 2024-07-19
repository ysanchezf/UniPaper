import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function FavoritesScreen() {
  const data = [
    { id: '1', name: 'Lorem', price: '$25.00', size: 'US 7' },
    { id: '2', name: 'Lorem', price: '$25.00', size: 'US 7' },
    { id: '3', name: 'Lorem', price: '$25.00', size: 'US 7' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemText}>{item.price}</Text>
            <Text style={styles.itemText}>{item.size}</Text>
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
  itemText: {
    fontSize: 18,
  },
});
