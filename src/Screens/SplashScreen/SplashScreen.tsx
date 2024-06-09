import React from 'react';
import {SafeAreaView, View, StyleSheet, Text, Image} from 'react-native';
import { Circle, Path, Svg } from 'react-native-svg';

const SplashScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Image
          source={require('../../Assets/Images/kabar.png')} 
          style={{
            alignSelf: 'center',
            width: 217,
            height: 66,
          }}
        />

      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // top:272,left:57,
    // gap:10
    backgroundColor:'white'
  },
});
