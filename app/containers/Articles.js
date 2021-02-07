import React, { Component } from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Dimensions, SafeAreaView, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ArticleDetails } from './ArticleDetails'
import { FlatList } from 'react-native-gesture-handler';
import ArticleRow from '../components/ArticleRow';
import { connect } from 'react-redux'
import { fetchArticlesAction } from '../../actions'
 
class Articles extends Component {
    constructor(props) {
        super(props)
        this.state = {
    
        }
    }


    async componentDidMount() {
        this.props.fetchArticleList()
    }

    render () {
        
        const { articles, isLoading } = this.props
        return (
            <SafeAreaView style={styles.container}> 
                <View style={styles.navigationHeader}>
                    <Image source={require('../../images/white_hamburger.png')} style={styles.hamburgerMenuImage}/>
                    <Text style={styles.navigationHeaderText}>NY Times Most Popular</Text>
                    <Image source={require('../../images/white_search.png')} style={styles.searchImage}/>
                    <Image source={require('../../images/white_cart2.png')} style={styles.cartImage}/>
                </View>
                <FlatList
                data = {articles}
                renderItem = {({item: article}) => <ArticleRow article={article} action={() => this.goToArticleDetailPage(article)}></ArticleRow>}
                keyExtractor= { (article) => article.title}></FlatList>
            </SafeAreaView>
            
        )
    }

    goToArticleDetailPage = (article) => {
        const { navigation } = this.props
        navigation.push('ArticleDetails', {url: article.url})
        //navigation.navigate('ArticleDetails', {name: 'Jane'})
    }
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            flexDirection: 'column',
        },
        navigationHeader: {
            height: 45,
            width: Dimensions.get('window').width,
            backgroundColor: '#00CBEE',
            flexDirection: 'row',
        },
        hamburgerMenuImage: {
            height: 30,
            width: 30,
            marginLeft: 8,
            alignSelf: 'center',
        },
        navigationHeaderText: {
            color: 'white',
            alignSelf: 'center',
            fontSize: 20,
            marginLeft: 10,
            flex: 1,
        },
        searchImage: {
            height: 30,
            width: 30,
            marginRight: 8,
            alignSelf: 'center',
        },
        cartImage: {
            height: 30,
            width: 30,
            marginRight: 8,
            alignSelf: 'center',
        },
        button: {
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#00CBEE',
        },
    }
)

//export default Articles
function mapStateToProps(state) {
    return {
        articles: state.articleReducers.articles,
        isLoading: state.articleReducers.isLoading
    }
}
export default connect(
    mapStateToProps,
    {
        fetchArticleList: fetchArticlesAction
    }
)(Articles)
