import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import RootNavigation from './src/Navigation/Navigation';
import {Provider} from 'react-redux';
import {store, persister} from './src/Redux/Store';
import {PersistGate} from 'redux-persist/integration/react';
import HomeScreen from './src/Screens/HomeScreen/HomeScreen';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate persistor={persister}>
          <NavigationContainer>
            <SafeAreaView style={styles.sectionContainer}>
              <RootNavigation />
              {/* <HomeScreen/> */}
            </SafeAreaView>
           </NavigationContainer>
         </PersistGate>
      </Provider>
     </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
});

export default App;
