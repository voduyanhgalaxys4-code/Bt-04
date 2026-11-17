
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>📚</Text>

      <Text style={styles.title}>MultiScreenApp</Text>

      <Text style={styles.subtitle}>
        Chào mừng bạn đến với ứng dụng của chúng tôi!
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('List')}
      >
        <Text style={styles.buttonText}>Khám phá danh sách</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4FF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },
  icon: {
    fontSize: 75,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3155A4',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#3155A4',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
