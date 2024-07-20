import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DashboardScreen({ navigation }) {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  const products = [
    { id: '1', name: 'CUADERNO RALLADO', price: 'RD$ 100.00', image: require('../assets/notebook.jpg') },
    { id: '2', name: 'BOLIGRAFO AZUL', price: 'RD$ 50.00', image: require('../assets/pen.jpg') },
    { id: '1', name: 'CUADERNO RALLADO', price: 'RD$ 100.00', image: require('../assets/notebook.jpg') },
    { id: '2', name: 'BOLIGRAFO AZUL', price: 'RD$ 50.00', image: require('../assets/pen.jpg') },
    { id: '1', name: 'CUADERNO RALLADO', price: 'RD$ 100.00', image: require('../assets/notebook.jpg') },
    { id: '2', name: 'BOLIGRAFO AZUL', price: 'RD$ 50.00', image: require('../assets/pen.jpg') },
  
    // Add more products as needed
  ];

  const toggleFavorite = (product) => {
    if (favorites.includes(product.id)) {
      setFavorites(favorites.filter(fav => fav !== product.id));
    } else {
      setFavorites([...favorites, product.id]);
    }
  };

  const handleAddToCart = (product) => {
    navigation.navigate('ProductQuantity', { product });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>News & Community</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Image source={require('../assets/placeholder.jpg')} style={styles.placeholder} />
        </TouchableOpacity>
      </View>
     
      <Text style={styles.subtitle}>New Arrivals</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={item.image} style={styles.itemImage} />
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
            <View style={styles.actions}>
              <TouchableOpacity onPress={() => toggleFavorite(item)}>
                <Ionicons 
                  name={favorites.includes(item.id) ? "heart" : "heart-outline"} 
                  size={24} 
                  color="red" 
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleAddToCart(item)}>
                <Ionicons 
                  name="cart-outline" 
                  size={24} 
                  color="green" 
                />
              </TouchableOpacity>
            </View>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  placeholder: {
    width: 40,
    height: 40,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  itemName: {
    fontSize: 16,
    flex: 1,
  },
  itemPrice: {
    fontSize: 14,
    color: '#888',
    marginRight: 15,
  },
  actions: {
    flexDirection: 'row',
  },
});
