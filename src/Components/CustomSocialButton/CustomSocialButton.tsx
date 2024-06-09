import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CustomSocialButton = ({value}:{value:string}) => {
  const image =
    value === 'Google'
      ? require('../../Assets/Images/google.png')
      : require('../../Assets/Images/facebook.png');
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={image}
        style={{height:21, width:21}}
      />
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
};

export default CustomSocialButton;

const styles = StyleSheet.create({
  container: {
    height: 48,
    backgroundColor: '#EEF1F4',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent:'center',
    paddingHorizontal: 24,
    paddingVertical: 13,
    gap: 10,
    width: 160,
    flexDirection:'row'
  },
  text: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#667080',
    height: 24,
  },
});
