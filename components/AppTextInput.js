import React from 'react';
import { View, TextInput, StyleSheet, Platform, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'


import defaultStyles from '../config/styles';


function AppTextInput({ icon, ...otherProps }) {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                {icon && <MaterialCommunityIcons name={icon} 
                size={20} color={defaultStyles.color.medium} style={styles.icon} />}
                <TextInput style={defaultStyles.textInput} {...otherProps} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.color.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10,
        top: 40
    },
    textInput: {
        color:  defaultStyles.color.dark,
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',

    },
    icon: {
        marginRight: 10,
        top: 3
    }
})
export default AppTextInput;