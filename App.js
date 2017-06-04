import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'

import BasicApp from './src/BasicApp'
import store from './src/store/manageStore'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
       <BasicApp style={{marginTop: 20}}/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
