import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/data/store';
import MainScreen from './src/screens/MainScreen';

const App: React.FC = () => {

  return (
    <>
      <Provider store={store}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={'#f0f0f0'}
        />
        <View style={styles.container}>
          <MainScreen />
        </View>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
});

export default App;