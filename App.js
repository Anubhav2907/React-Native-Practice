import { StatusBar } from 'expo-status-bar';
import {SafeAreaView,Button, StyleSheet,Alert, Text,TouchableOpacity, View, Image, Platform } from 'react-native';
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';
export default function App() {
  const {landscape} = useDeviceOrientation();
  return (
    <SafeAreaView style={styles.container}>      
      <View style={{
        backgroundColor: "dodgerblue",
        width:"100%",
        height: landscape?"100%":"30%",
      }}>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});