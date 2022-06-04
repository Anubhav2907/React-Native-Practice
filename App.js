import {View, StyleSheet} from 'react-native';
import CustomText from './app/components/CustomText';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
export default function App() {
  return (
    <View style={{
      backgroundColor: '#f8f4f4',
      padding: 20,
      paddingTop: 100,
    }}>
      <Card title="Red jacket for sale" subtitle={"$100"} image={require("./app/assets/red-jacket.jpeg")}></Card>
    </View>
  );
}