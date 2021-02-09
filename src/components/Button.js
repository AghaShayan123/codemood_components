import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors } from '../constants';

export default Button = ({buttonText}) => {
    return(
        <View style={styles.button}>
            <Text style={styles.text}>{buttonText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: colors.primary,
        width: 300,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        borderRadius: 10
    },
    text:{
        color: colors.white,
        fontSize: 16
    }
})