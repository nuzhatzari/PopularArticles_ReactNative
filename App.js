import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

//Redux-saga
import createSagaMiddleware from 'redux-saga';
import { allReducers } from './reducers'
import rootSaga from './sagas/rootSaga'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  Articles  from './app/containers/Articles';
import  ArticleDetails  from './app/containers/ArticleDetails';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(allReducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Articles' screenOptions={{headerShown: false}}>
          <Stack.Screen name='Articles' component={Articles} options={{title: 'NY Times Most Popular'}}/>
          <Stack.Screen name='ArticleDetails' component={ArticleDetails} options={{title: 'Details'}}/>
        </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
