import React from 'react';
import {StyleSheet,Text,TouchableOpacity} from 'react-native';

import color from '../config/color';

function AppButton({title,onPress , color='primary'}) {
    return (
        <TouchableOpacity style={styles.button}
        onPress={onPress}
        >
     <Text style={[styles.text, {backgroundColor:color[color]}]}>{title}</Text>
        
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
     backgroundColor:'tomato',
     borderRadius:40,
     justifyContent:'center',
     alignItems:'center',
     padding:15,
     width:200,
     marginVertical:10,
     height:55,
     top:38,

    },
    text:{
    color:color.white,
    fontSize:18,
    textTransform:'uppercase',
    fontWeight:'bold',
    
    }
})

export default AppButton;