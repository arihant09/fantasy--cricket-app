import React from 'react';
import { StyleSheet,View } from 'react-native';
import color from '../config/color';

function ListItemSeparator(props) {
    return (
    
     <View style={styles.seperator}>
            </View>
    );
}

const styles = StyleSheet.create({
    seperator:{
        width:'100%',
        height:1,
        backgroundColor:color.light,
    }
})

export default ListItemSeparator;