import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProductQuantityScreen({ route, navigation }) {
  const [quantity, setQuantity] = useState(1);
  const { product } = route.params;

  const handleAddToCart = () => {
    // Add the product with the selected quantity to the cart
    // This is where you can add your logic to handle the cart
    console.log(`Added ${quantity} of ${product.name} to the cart`);
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Quantity</Text>
      <Text style={styles.productName}>{product.name}</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>
          <Text style={styles.button}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity onPress={() => setQuantity(quantity < 10 ? quantity + 1 : 10)}>
          <Text style={styles.button}>+</Text>
        </TouchableOpacity>
      </View>
      <Button title="Add to Cart" onPress={handleAddToCart} />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  productName: {
    fontSize: 18,
    marginBottom: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    fontSize: 30,
    padding: 10,
    backgroundColor: '#ddd',
    margin: 10,
  },
  quantity: {
    fontSize: 24,
    marginHorizontal: 20,
  },
});
