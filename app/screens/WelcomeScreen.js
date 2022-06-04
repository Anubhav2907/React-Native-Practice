import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground blurRadius={10} style={styles.background} source={require("../assets/background.jpg")}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/logo-red.png")}></Image>
                <Text style={styles.logoText}>Sell What you Don't need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Login" color="primary"></AppButton>
                <AppButton title="Register" color="secondary"></AppButton>
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex:1,
        alignItems:'center',
        justifyContent: 'flex-end',
    },
    buttonContainer:{
        padding: 20,
        width: '100%',
    },
    logoContainer:{
        position:'absolute',
        top:70,
        alignItems:'center'
    },
    logoText:{
        paddingTop:20,
        fontSize: 25,
        fontWeight:"500"
    },
    logo: {
        width: 100,
        height: 100,
    }
})
export default WelcomeScreen;