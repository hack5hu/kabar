import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

interface ButtonProps {
  value:'string';
  onPress:()=>void;
}
const CustomButton = ({value, onPress}:ButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={()=>onPress()}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#1877F2',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 13,
    gap: 10,
  },
  text: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#fff',
    height: 24,
  },
});
