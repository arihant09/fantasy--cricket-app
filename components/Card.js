import React from 'react';
import {View, StyleSheet,Image} from 'react-native';

import color from '../config/color';
import AppText from './AppText';

function Card({title,subTitle,image}) {
    return (
      <View style={styles.card}>
        <Image style={styles.image}source={image}  />
        <View
        style={styles.detailsContainer}
        >
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    card:{
       borderRadius:20,
        backgroundColor:color.white,
        marginBottom:20,
        width:'90%',
        marginLeft:20,
    },
    image:{
        top:10,
        width:'100%',
        height:200,
        borderRadius:30,
    },
    detailsContainer:{
        padding:20,

    },
    title:{
        marginBottom:7,
       color:color.secondary,
       fontWeight:'bold'
    },
    subTitle:{
        color:color.secondary,
        fontWeight:'bold'
    }
})

export default Card;