import React from 'react';
import { View ,StyleSheet,Image,TouchableHighlight} from 'react-native';
import AppText from './AppText';
import color from '../config/color';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from "react-native-gesture-handler";

function ListItem({title,subTitle,
    image,
    IconComponent,
    onPress,
    renderRightActions}) {
    return (
        <GestureHandlerRootView>
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={color.light} 
        onPress={onPress}>
      <View style={styles.container}>
          {IconComponent}
        {image && <Image style={styles.image} source={image} />}
      <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}
          </AppText>
          {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
      </View>
      </View>
      </TouchableHighlight>
      </Swipeable>
      </GestureHandlerRootView>
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:15,
        left:10,
        backgroundColor:color.white
    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
        
    },
    title:{
        fontSize:15,
        fontWeight:'bold'
    },
    subTitle:{
        color:color.medium,
        fontSize:15
    },
    detailsContainer:{
        marginLeft:10,
        justifyContent:'center'
    }
})

export default ListItem;