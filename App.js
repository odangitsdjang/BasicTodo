import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Main from './app/components/Main';
import {configureStore} from './app/store/store';

export default class App extends Component<{}> {

  render() {
    return (
      <Provider store={configureStore()}>
        <Main/>
      </Provider>
    );
  }
}

