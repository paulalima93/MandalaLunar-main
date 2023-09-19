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
            fisico: 0,
            presenca: 0,
            intuicao: 0,
            comunicacao: 0,
            amorosidade: 0,
            autoconfianca: 0,
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
                    <Text style={styles.titletext}>
                        Novo Dia
                    </Text>
                </View>
                <Text style={styles.textText}>Como você se sentiu hoje?</Text>


                <View style={styles.lowerContainer}>






                    <View style={styles.containerButton}>
                        <TouchableOpacity style={[styles.button, {backgroundColor: '#FFE4E4'}]}></TouchableOpacity>
                        <View style={styles.containerSlider} >
                            <View style={styles.containerText}>
                                <Text style={styles.textText}> Físico</Text>
                            </View>
                            <Slider
                                style={{ width: 200, height: 40 }}
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
                    </View>










                    <View style={styles.containerButton}>
                        <TouchableOpacity style={[styles.button, {backgroundColor: '#DCBDE8'}]}></TouchableOpacity>
                        <View style={styles.containerSlider} >
                            <View style={styles.containerText}>
                                <Text style={styles.textText}> Presença</Text>
                            </View>
                            <Slider
                                style={{ width: 200, height: 40 }}
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
                    </View>










                    <View style={styles.containerButton}>
                        <TouchableOpacity style={[styles.button, {backgroundColor: '#C3C9F1'}]}></TouchableOpacity>
                        <View style={styles.containerSlider} >
                            <View style={styles.containerText}>
                                <Text style={styles.textText}> Intuição</Text>
                            </View>
                            <Slider
                                style={{ width: 200, height: 40 }}
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
                    </View>










                    <View style={styles.containerButton}>
                        <TouchableOpacity style={[styles.button, {backgroundColor: '#CDEEFA'}]}></TouchableOpacity>
                        <View style={styles.containerSlider} >
                            <View style={styles.containerText}>
                                <Text style={styles.textText}> Comunicação</Text>
                            </View>
                            <Slider
                                style={{ width: 200, height: 40 }}
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
                    </View>










                    <View style={styles.containerButton}>
                        <TouchableOpacity style={[styles.button, {backgroundColor: '#D6F1C3'}]}></TouchableOpacity>
                        <View style={styles.containerSlider} >
                            <View style={styles.containerText}>
                                <Text style={styles.textText}> Amorosidade</Text>
                            </View>
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
                    </View>






                   
                    <View style={styles.containerButton}>
                        <TouchableOpacity style={[styles.button, {backgroundColor: '#EFF4BA'}]}></TouchableOpacity>


                        <View style={styles.containerSlider} >
                            <View style={styles.containerText}>
                                <Text style={styles.textText}> Autoconfiança</Text>
                            </View>


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
                    </View>








                </View>


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
        borderWidth: 5,
    },
    containerButton: {
        flexDirection: 'row',
        marginTop: 15,
    },
    styleTitle: {
        flexDirection: 'row',
    },
    titletext: {
        fontFamily: 'montserrat',
        fontSize: 40,
        marginTop: 25,
    },
    textText: {
        fontFamily: 'montserrat',
        fontSize: 15,
        textAlign: 'right',
        fontWeight: 400,
    },
    container: {
        alignItems: 'center',
        backgroundColor: '#fce1cb',
        flex: 1,
    },
    containerText: {
        marginRight: 20,
    },
    containerSlider: {
        justifyContent: "center",
        marginLeft: 20,
    },
    lowerContainer: {


    }
})
