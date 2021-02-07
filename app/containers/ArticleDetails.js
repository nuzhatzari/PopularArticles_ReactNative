import React, { Component } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Dimensions, ActivityIndicator } from "react-native";
import { WebView } from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ArticleDetails extends Component {
    constructor(props) {
        super(props)
        this.state = { visible: true };
    }

    hideSpinner() {
        this.setState({ visible: false });
    }
      
    render () {
        const { navigation } = this.props;
        const { url } = this.props.route.params;
        return (
            <SafeAreaView style={{flex: 1}}>
            <View style={styles.navigationHeader}>
                <TouchableOpacity style={styles.backButtonView} onPress={ () => this.goBackToHome()}>
                    <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
            </View>
            <WebView 
            originWhitelist={['*']}
            source={{ uri: url }}  
            onLoad={() => this.hideSpinner()}
            />
            {this.state.visible && (
            <ActivityIndicator
            style= {styles.activityIndicator}
            size="large"
            color='#009b88'/>
            )}
            </SafeAreaView>
        )
    }

    goBackToHome = () => {
        const { navigation } = this.props
        navigation.pop()
    }
    
}

const styles = StyleSheet.create({
    navigationHeader: {
        height: 45,
        width: Dimensions.get('window').width,
        backgroundColor: '#00CBEE',
        flexDirection: 'row',
    },
    backButtonView: {
        width: 70,
        height: 40,
        justifyContent: 'center',
    },
    backButtonText: {
        color: 'white',
        fontSize: 20,
        alignSelf: 'center',
    },
    activityIndicator: {
        position: 'absolute',               
        left: 0,               
        right: 0,               
        bottom: 0,               
        top: 0,
    }
})