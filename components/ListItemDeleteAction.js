import React from 'react';
import { StyleSheet ,View} from 'react-native';
import color from '../config/color'
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function ListItemDeleteAction({onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
<MaterialCommunityIcons 
   name='trash-can'
    size={35}
    color={color.white}/>
        </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:color.danger,
        width:70,
        height:100,
        justifyContent:'center',
        alignItems:'center',
    }
})
export default ListItemDeleteAction;