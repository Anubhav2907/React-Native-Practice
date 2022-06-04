import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native'
import CustomText from './CustomText'
import colors from '../config/colors'
function Card({title, subtitle, image}) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image}/>
            <View style={styles.detailContainer}>
                <CustomText style={styles.title}>{title}</CustomText>
                <CustomText style={styles.subtitle}>{subtitle}</CustomText>
            </View>
        </View>
    );


}
const styles = StyleSheet.create({
    card:{
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow:'hidden'
    },
    detailContainer: {
        padding: 20,
    },
    image:{
        width:'100%',
        height: 200,
    },
    subtitle:{
        color: colors.secondary,
        fontWeight:'bold'
    },
    title:{
        marginBottom: 7
    }
})
export default Card;