import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import * as Font from "expo-font";
var fonte = {
    'montserrat': require('../assets/fonte.ttf')
}

export default class NewDay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontsLoaded: false,
            fisico: 20,
            presenca: 20,
            intuicao: 20,
            comunicacao: 20,
            amorosidade: 20,
            autoconfianca: 20,
        };
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
                        Novo Dia
                    </Text>
                </View>
                <Text style={styles.textText}>Como você se sentiu hoje?</Text>

                <View style={styles.lowerContainer}>

                    <View style={styles.containerButton}>
                        <TouchableOpacity style={styles.button}></TouchableOpacity>
                        
                        <View style={styles.containerSlider} >
                            <Slider
                                style={{ width: 200, height: 40, }}
                                value={this.state.fisico}
                                minimumValue={0}
                                maximumValue={100}
                                thumbTintColor="#96B5A6"
                                minimumTrackTintColor="#96B5A6"
                                maximumTrackTintColor="#C1C1C1"
                                step={1}
                                onValueChange={(value) => this.setState({ fisico: value })}
                            />
                        </View>
                        <View style={styles.containerText}>
                            <Text style={styles.textText}> Físico</Text>
                        </View>

                    </View> {/*fim containerbutton*/}


                    <View style={styles.containerButton}>
                        <TouchableOpacity style={styles.button}></TouchableOpacity>
                        
                        <View style={styles.containerSlider} >
                            <Slider
                                style={{ width: 200, height: 40, }}
                                value={this.state.presenca}
                                minimumValue={0}
                                maximumValue={100}
                                thumbTintColor="#96B5A6"
                                minimumTrackTintColor="#96B5A6"
                                maximumTrackTintColor="#C1C1C1"
                                step={1}
                                onValueChange={(value) => this.setState({ presenca: value })}
                            />
                        </View>
                        <View style={styles.containerText}>
                            <Text style={styles.textText}> Presença</Text>
                        </View>

                    </View> {/*fim containerbutton*/}

                    <View style={styles.containerButton}>
                        <TouchableOpacity style={styles.button}></TouchableOpacity>
                        
                        <View style={styles.containerSlider} >
                            <Slider
                                style={{ width: 200, height: 40, }}
                                value={this.state.intuicao}
                                minimumValue={0}
                                maximumValue={100}
                                thumbTintColor="#96B5A6"
                                minimumTrackTintColor="#96B5A6"
                                maximumTrackTintColor="#C1C1C1"
                                step={1}
                                onValueChange={(value) => this.setState({ intuicao: value })}
                            />
                        </View>
                        <View style={styles.containerText}>
                            <Text style={styles.textText}> Intuição</Text>
                        </View>

                    </View> {/*fim containerbutton*/}


                    <View style={styles.containerButton}>
                        <TouchableOpacity style={styles.button}></TouchableOpacity>
                        
                        <View style={styles.containerSlider} >
                            <Slider
                                style={{ width: 200, height: 40, }}
                                value={this.state.comunicacao}
                                minimumValue={0}
                                maximumValue={100}
                                thumbTintColor="#96B5A6"
                                minimumTrackTintColor="#96B5A6"
                                maximumTrackTintColor="#C1C1C1"
                                step={1}
                                onValueChange={(value) => this.setState({ comunicacao: value })}
                            />
                        </View>
                        <View style={styles.containerText}>
                            <Text style={styles.textText}> Comunicação</Text>
                        </View>

                    </View> {/*fim containerbutton*/}


                    <View style={styles.containerButton}>
                        <TouchableOpacity style={styles.button}></TouchableOpacity>
                        
                        <View style={styles.containerSlider} >
                            <Slider
                                style={{ width: 200, height: 40, }}
                                value={this.state.amorosidade}
                                minimumValue={0}
                                maximumValue={100}
                                thumbTintColor="#96B5A6"
                                minimumTrackTintColor="#96B5A6"
                                maximumTrackTintColor="#C1C1C1"
                                step={1}
                                onValueChange={(value) => this.setState({ amorosidade: value })}
                            />
                        </View>
                        <View style={styles.containerText}>
                            <Text style={styles.textText}> Amorisidade</Text>
                        </View>

                    </View> {/*fim containerbutton*/}


                    <View style={styles.containerButton}>
                        <TouchableOpacity style={styles.button}></TouchableOpacity>
                        
                        <View style={styles.containerSlider} >
                            <Slider
                                style={{ width: 200, height: 40, }}
                                value={this.state.autoconfianca}
                                minimumValue={0}
                                maximumValue={100}
                                thumbTintColor="#96B5A6"
                                minimumTrackTintColor="#96B5A6"
                                maximumTrackTintColor="#C1C1C1"
                                step={1}
                                onValueChange={(value) => this.setState({ autoconfianca: value })}
                            />
                        </View>
                        <View style={styles.containerText}>
                            <Text style={styles.textText}> Autoconfiança</Text>
                        </View>

                    </View> {/*fim containerbutton*/}




                </View>{/*fim lowerContainer*/}

            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#96b5a6',
        borderRadius: 25,
        height: 61,
        width: 140,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        borderColor: "#FFF",
        borderWidth: 5
    },
    containerButton: {
        flexDirection: 'row',
        marginTop: 15,
    },
    styleTitle: {
        flexDirection: 'row'
    },
    Titletext: {
        fontFamily: 'montserrat',
        fontSize: 40,
        marginTop: 25
    },
    textText: {
        marginTop: 20,
        fontFamily: 'montserrat',
        fontSize: 19,
        textAlign: 'center'
    },
    container: {
        alignItems: 'center',
        backgroundColor: '#fce1cb',
        flex: 1
    },
    textButton: {
        marginLeft: 65,
        fontFamily: 'montserrat',
        fontSize: 26,
        justifyContent: 'center',
        alignItems: 'center',

    },
    containerText: {
        justifyContent:"flex-start"
    },
    containerSlider: {
        justifyContent: "center",
        marginLeft: 20,
        marginTop: 15
    },
    lowerContainer: {

    }
})