import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import * as Font from 'expo-font'
var fonte = {
    'montserrat': require('../assets/fonte.ttf')
}

const dados = [
    {
        id: "01",
        title: 'Ovulação',
        icon: "stop-circle-outline",
    },
    {
        id: "02",
        title: 'Dor de \n Cabeça',
        icon: "medical-outline",
    },
    {
        id: "03",
        title: 'Espinhas',
        icon: "bandage-outline",
    },
    {
        id: "04",
        title: 'Inchaço',
        icon: "aperture-outline",
    },
    {
        id: "05",
        title: 'Cólica',
        icon: "scan-outline",
    },
    {
        id: "06",
        title: 'Dor nos seios',
        icon: "recording-outline",
    },
]
export default class Físico extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontsLoaded: false,
            ovulacao: false,
            dor_cabeca: false,
            espinhas: false,
            inchaco: false,
            colica: false,
            dor_seios:false

        };
    }

    renderItem = ({ item }) => {
        return(
            <View style={{flexDirection: 'row', alignItems: 'center', width: "49%"}}>
                <TouchableOpacity style={styles.button}>
                        <Ionicons
                            name={item.icon}
                            size={20}
                            color={'black'}
                        />
                    </TouchableOpacity>
                    <Text style={styles.text}>{item.title}</Text>
            </View>
        )

    }

    async _loadFontsAsync() {
        await Font.loadAsync(fonte);
        this.setState({ fontsLoaded: true });
    }

    componentDidMount() {
        this._loadFontsAsync();
    }
    render() {
        return (

            <View style={styles.container}>
                <View style={styles.styleTitle}>
                    <Text style={styles.Titletext}>
                        Físico
                    </Text>
                </View>

                <Text style={styles.textText}>Se você quiser, pode escolher um ícone para registrar as questões físicas do seu corpo no dia de hoje</Text>

                <FlatList 
                    data={dados}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                    numColumns = {2}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        height: 20,
        width: 20
    },
    button: {
        backgroundColor: '#96b5a6',
        borderRadius: 25.5,
        height: 51,
        width: 51,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    containerButton: {
        flexDirection: 'row',
        marginTop: 12,
        alignItems: "center",
        justifyContent: 'space-between',
    },
    styleTitle: {
        flexDirection: 'row'
    },
    Titletext: {
        fontFamily: 'montserrat',
        fontSize: 40,
        marginTop: 20,
    },
    textText: {
        marginTop: 20,
        fontFamily: 'montserrat',
        fontSize: 19,
        textAlign: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    container: {
        alignItems: 'center',
        backgroundColor: '#fce1cb',
        flex: 1
    },
    text: {
        fontFamily: 'montserrat',
        fontSize: 21,
        marginTop: 9,
        marginLeft: 12,
        marginRight: 12
    }
})
