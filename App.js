
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './components/HomeScreen';
import ListScreen from './components/ListScreen';
import DetailScreen from './components/DetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#3155A4',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Trang chủ' }}
        />

        <Stack.Screen
          name="List"
          component={ListScreen}
          options={{ title: 'Danh sách sản phẩm' }}
        />

        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ title: 'Chi tiết sản phẩm' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
