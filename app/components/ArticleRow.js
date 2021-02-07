import  React from 'react';
import { Image, StyleSheet, Touchable, View, Text, Dimensions } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler'


export default function ArticleRow(props) {
    return (
        <TouchableOpacity onPress={props.action}  style={{flex: 1}}>
            <View style={styles.container}>
                <Image source={require('../../images/grey_filled_circle.png')} style={styles.greyFilledCircle}></Image>
                <View style={styles.description}>
                    <Text style={styles.nameText}>{props.article.title}</Text>
                    <Text style={styles.authorText}>{props.article.byline}</Text>
                    <View style={styles.dateView}>
                        <Image source={require('../../images/grey_calendar.png')} style={{width: 20, height: 22.5}}></Image>
                        <Text style={styles.dateText}>{props.article.published_date}</Text>
                    </View>
                    
                </View>
            </View>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        flexDirection: 'row',
        width: Dimensions.get('window').width,
    },
    greyFilledCircle: {
        marginLeft: 10,
        height: 45,
        width: 45,
        alignSelf: 'center',
        resizeMode: 'contain',
    },
    description: {
        flex: 1,
        marginLeft: 10,
        marginTop: 16,
        marginBottom: 10,
        marginRight: 10,
    },
    nameText: {
        fontSize: 18,
    },
    authorText: {
        fontSize: 15,
        color: 'grey',
        marginTop: 10,
    },
    dateView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 10,
    },
    dateText: {
        alignSelf: 'center',
        color: 'grey',
        fontSize: 15,
        marginLeft: 10,

    }
})