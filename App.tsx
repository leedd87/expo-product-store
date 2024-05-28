import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ProductsApp } from './src/ProductsApp';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <ProductsApp />
      <StatusBar style="auto" />
    </View>
  );
}
