import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Header = ({navigation}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={()=>navigation.goBack()}>
      <Image
              source={require('../..//Assets/Images/arrow.png')} // replace with your image source
              style={styles.backButton}
            
            />
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Fill your Profile</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 24,
  },
  backButton: {
    position: 'absolute',
    left: 0,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  titleText: {
    textAlign: 'center',
    width: 120,
    fontWeight:'600',
    fontSize:16,
    lineHeight:24,
    letterSpacing:0.12
  },
});
