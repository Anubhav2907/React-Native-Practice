import {View, StyleSheet} from 'react-native';
import CustomText from './app/components/CustomText';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessageScreen from './app/screens/MessageScreen';
export default function App() {
  return (
    <MessageScreen/>
  );
}