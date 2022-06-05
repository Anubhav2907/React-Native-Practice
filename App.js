import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import Screen from "./app/components/Screen";
import AppPicker from "./app/components/Picker";
import AppTextInput from "./app/components/TextInput";
import { TextInput } from "react-native";
import LoginScreen from "./app/screens/LoginScreen";
const categories = [
  {
    value: "1",
    label: "Furniture",
  },
  {
    value: "2",
    label: "Clothing",
  },
  {
    value: "3",
    label: "Electronics",
  },
]
export default function App() {
  const [category, setCategory] = useState();
  return (
    // <NavigationContainer>
    <Screen>
      <LoginScreen/>
    </Screen>
    // </NavigationContainer>
  );
}
