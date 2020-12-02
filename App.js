/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import {createStore,applyMiddleware, combineReducers} from 'redux';
import ReduxThunk from 'redux-thunk';
import Router from './Router';
import AuthenticationReducer from './store/reducers/AuthenticationReducer';
import ScheduleReducer from './store/reducers/ScheduleReducer';
import firebase from '@react-native-firebase/app'

const rootReducer  = combineReducers({
  authentication:AuthenticationReducer,
  schedules:ScheduleReducer
});
const store = createStore(rootReducer,applyMiddleware(ReduxThunk));


const firebaseConfig = {
  apiKey: "AIzaSyAHU3NZGy6TD9AWZKCxZxSrAyKnHW_pOSQ",
  authDomain: "etrip-v1.firebaseapp.com",
  databaseURL: "https://etrip-v1.firebaseio.com",
  projectId: "etrip-v1",
  storageBucket: "etrip-v1.appspot.com",
  messagingSenderId: "1048102605710",
  appId: "1:1048102605710:web:e67111da04962b87948adf",
  measurementId: "G-MQM0461X42"

}


const App = () => {
  firebase.initializeApp(firebaseConfig);

  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <Router/>
      </PaperProvider>
    </StoreProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
