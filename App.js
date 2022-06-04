import { StatusBar } from 'expo-status-bar';
import {SafeAreaView,Button, StyleSheet,Alert, Text,TouchableOpacity, View, Image, Platform } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={[styles.container,stylesnew.container]}>
      <Text style={styles.text} numberOfLines={3}>Open up App.js to start working on your app!!</Text>
      <TouchableOpacity onPress={()=>console.log('Image')}>
        <Image source={{
          width:200,
          height:200,
          uri:"https://reactnative.dev/img/tiny_logo.png",
          }}/>
      </TouchableOpacity>
      <View>
        <Button title='Click Me!' onPress={()=>alert('Button Clicked')}></Button>
        <Button title='Custom Alert!' onPress={()=>Alert.alert("My Title", "My Message", [
          {
            text: "Yes", onPress:()=>{console.log("Yes")}
          },
          {
            text: "No", onPress:()=>{console.log("No")}
          }
        ])}></Button>
        <Button title='Prompt' onPress={()=>Alert.prompt('My Prompt', 'My Message', (text)=>{console.log(text)})}></Button>

      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'white',
    paddingBottom:Platform.OS==="ios"?20:0,
  }
});
const stylesnew = StyleSheet.create({
  container: {
    color: 'white',
    backgroundColor: 'teal',
  }
})