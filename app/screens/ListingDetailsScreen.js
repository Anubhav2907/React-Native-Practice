import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import colors from '../config/colors';
import CustomText from '../components/CustomText';
import ListItem from '../components/ListItem';
function ListingDetailsScreen(props) {
    return (
        <View>
            <Image source={require('../assets/red-jacket.jpeg')} style={styles.image}></Image>
            <View style={styles.detailsContainer}>
                <CustomText style={styles.text}>Red Jacket for sale</CustomText>
                <CustomText style={styles.price}>$1000</CustomText>
                <View style={styles.userContainer}>
                    <ListItem image={require('../assets/user.png')} title="Anubhav Singh" subtitle="5 Listings"></ListItem>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    detailsContainer:{
        padding:20
    },
    image:{
        width: '100%',
        height: 300
    },
    price:{
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10
    },
    text:{
        fontSize:24,
        fontWeight:'bold'
    },
    userContainer:{
        marginVertical: 20,
    }
})
export default ListingDetailsScreen;