import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import colors from '../config/colors';
import CustomText from './CustomText';
function ListItem({title, subtitle, image}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image}></Image>
            <View>
                <CustomText style={styles.title}>{title}</CustomText>
                <CustomText style={styles.subtitle}>{subtitle}</CustomText>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        padding: 15,
    },
    image:{
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10
    },
    title:{
        fontWeight: '500',
    },
    subtitle:{
        color: colors.medium,
    }
})
export default ListItem;