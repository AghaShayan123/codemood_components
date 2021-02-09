import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { colors } from '../constants';
import { Button, Input, TextButton } from '../components';

const {width, height} = Dimensions.get('window');

export default Login = () => {
    return(
        <View style={styles.container}>
            <Input 
                placeholder= "Email"
            />
            <Input
                placeholder= "Password"
                secureTextEntry= {true}
            />
            <Button  
                buttonText= "Login"
            />

            <TextButton 
                text="Have not an account? SignUp"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height,
        width,
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center'
    }
})