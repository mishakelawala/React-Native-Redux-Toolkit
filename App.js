import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"
import Counter from './components/Counter';
import { store } from './store/index';



let persistor = persistStore(store)
const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.container}>
        <PersistGate loading={null} persistor={persistor}>
        <Counter />
        </PersistGate>
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10
  }
});
