import React, {Component} from 'react'
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import * as Font from 'expo-font'
var fonte ={
    'montserrat':require('../assets/fonte.ttf')
}

export default class Comunicação extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fontsLoaded: false,
          
        };}

    async _loadFontsAsync() {
        await Font.loadAsync(fonte);
        this.setState({ fontsLoaded: true });
      }

      componentDidMount() {
        this._loadFontsAsync();
      }
    render (){
        return(

            <View style={styles.container}>
                <View style={styles.styleTitle}>
                    <Text style={styles.Titletext}>
                        Comunicação
                    </Text>
                </View>

                <Text style={styles.textText}>Você teve um fluxo de criatividade hoje?</Text>
                
                <View style={styles.containerButton}>    
                    <TouchableOpacity style={styles.button}>
                    <Ionicons
                            name={'infinite-outline'}
                            size={20}
                            color={'black'}
                        />
                    </TouchableOpacity>
                    <Text style={styles.text}>Criatividade</Text>
                </View>
                
               
            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image:{
        height: 20,
        width: 20
    },
    button:{
        backgroundColor: '#96b5a6',
        borderRadius: 25.5,
        height: 51,
        width: 51,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    iconButton:{
        position: 'absolute',
        backgroundColor: '#FEBEAC',
        borderRadius: 25,
        height: 77,
        width: 84,
        marginTop: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerButton:{
        flexDirection: 'row',
        marginTop: 12,
        alignItems: 'center',

    },
    styleTitle:{
        flexDirection: 'row'
    },
    Titletext:{
        fontFamily: 'montserrat',
        fontSize: 40,
        marginTop: 20,
    },
    textText:{
        marginTop: 20,
        fontFamily: 'montserrat',
        fontSize: 19,
        textAlign: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    container:{
        alignItems: 'center',
        backgroundColor: '#fce1cb',
        flex: 1
    },
    text:{
        fontFamily: 'montserrat',
        fontSize: 21,
        marginTop: 9,
        marginLeft: 12,
        marginRight: 12
    }
})