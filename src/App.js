import React, { Component } from 'react';
import { Text, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <SafeAreaView>
          <Header title="Tech Stack" />
          <Text>Hello!</Text>
        </SafeAreaView>
      </Provider>
    );
  }
}

export default App;
