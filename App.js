import {View, StyleSheet} from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={{width:100, height:100, backgroundColor:'dodgerblue'}}/>
      <View style={{width:100, height:100, backgroundColor:'tomato'}}/>
      <View style={{width:100, height:100, backgroundColor:'teal'}}/>
      <View style={{width:100, height:100, backgroundColor:'red'}}/>
      <View style={{width:100, height:100, backgroundColor:'violet'}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    flex: 1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    flexWrap:'wrap',
    alignContent:'center',
  },
});