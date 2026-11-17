
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function DetailScreen({ route, navigation }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.icon}>{product.icon}</Text>

        <Text style={styles.title}>{product.name}</Text>

        <Text style={styles.price}>{product.price}</Text>

        <Text style={styles.description}>
          {product.description}
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>← Quay lại</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4FF',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 30,
    borderRadius: 20,
    elevation: 4,
  },
  icon: {
    fontSize: 85,
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#3155A4',
    textAlign: 'center',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E67E22',
    marginTop: 15,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 25,
    marginVertical: 25,
  },
  button: {
    backgroundColor: '#3155A4',
    paddingVertical: 13,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
