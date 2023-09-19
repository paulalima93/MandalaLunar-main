import React, {Component} from "react";
import {View, Text, StyleSheet} from 'react-native';



export default class Settings extends Component {
    render (){
        return(

            <View style={styles.container}>
                <Text>
                    Tela de configurações
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center'
    }
})