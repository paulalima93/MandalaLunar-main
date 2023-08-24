import React, {Component} from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import * as Font from "expo-font";

var fonte ={
    'montserrat':require('../assets/fonte.ttf')
}

export default class Home extends Component {
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
              
                    <Image source={require('../assets/logo.png')} style={styles.image}/>
                    <Text style={styles.Titletext}>
                        Mandala Lunar
                    </Text>
                </View>
                <Text style={styles.textText}>*Mensagenzinha motivacional e tals*</Text>
                
                <View style={styles.containerButton}>    
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>Novo Dia</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                        <Ionicons
                            name={'flower'}
                            size={25}
                            color={'black'}
                        />
                    </TouchableOpacity>
                </View>
                <View style={[styles.containerButton, {marginTop: 20}]}>    
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>Diário</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                        <Ionicons
                            name={'book'}
                            size={25}
                            color={'black'}
                        />
                    </TouchableOpacity>
                </View>
            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image:{
        height: 118,
        width: 116
    },
    button:{
        backgroundColor: '#96b5a6',
        borderRadius: 25,
        height: 61,
        width: 261,
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
        marginTop: 30,
    },
    styleTitle:{
        flexDirection: 'row'
    },
    Titletext:{
        fontFamily: 'montserrat',
        fontSize: 40,
        marginTop: 25
    },
    textText:{
        marginTop: 20,
        fontFamily: 'montserrat',
        fontSize: 19,
        textAlign: 'center'
    },
    container:{
        alignItems: 'center',
        backgroundColor: '#fce1cb',
        flex: 1
    },
    textButton:{
        marginLeft: 65,
        fontFamily: 'montserrat',
        fontSize: 26,
        justifyContent: 'center',
        alignItems: 'center',
        
    }
})