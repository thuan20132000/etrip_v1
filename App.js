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

const rootReducer  = combineReducers({
  authentication:AuthenticationReducer,
  schedules:ScheduleReducer
});
const store = createStore(rootReducer,applyMiddleware(ReduxThunk));

const App = () => {
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
