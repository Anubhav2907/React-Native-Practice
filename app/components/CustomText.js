import React from 'react'
import { Text, Platform, StyleSheet } from 'react-native'
export default function CustomText({children, style}) {
  return (
    <Text style={[styles.text, style]}>{children}</Text>
  )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    }
})