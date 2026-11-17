
import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const products = [
  { id: '1', name: 'Laptop Dell', price: '15.000.000đ', icon: '💻', description: 'Laptop Dell hiệu năng mạnh mẽ, phù hợp cho học tập và làm việc.' },
  { id: '2', name: 'iPhone 16', price: '20.000.000đ', icon: '📱', description: 'Điện thoại iPhone hiện đại với camera chất lượng cao.' },
  { id: '3', name: 'Tai nghe Bluetooth', price: '1.500.000đ', icon: '🎧', description: 'Tai nghe không dây tiện lợi, âm thanh sống động.' },
  { id: '4', name: 'Đồng hồ thông minh', price: '3.000.000đ', icon: '⌚', description: 'Đồng hồ thông minh hỗ trợ theo dõi hoạt động hằng ngày.' },
  { id: '5', name: 'Máy ảnh Canon', price: '12.000.000đ', icon: '📷', description: 'Máy ảnh Canon cho những bức hình sắc nét.' },
];

export default function ListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh sách sản phẩm</Text>
      <Text style={styles.subtitle}>Chọn sản phẩm để xem chi tiết</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Detail', { product: item })}
          >
            <Text style={styles.icon}>{item.icon}</Text>

            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4FF',
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#3155A4',
    marginTop: 15,
  },
  subtitle: {
    fontSize: 14,
    color: '#777',
    marginTop: 8,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    elevation: 3,
  },
  icon: {
    fontSize: 35,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    fontSize: 14,
    color: '#3155A4',
    marginTop: 5,
  },
  arrow: {
    fontSize: 30,
    color: '#3155A4',
  },
});
