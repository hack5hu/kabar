import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-paper';

interface CustomProps {
  value: string;
  setTerm: (text: string) => void;
}
const Searchbox = ({value, setTerm}:CustomProps) => {
  return (
    <View style={styles.inputContainer}>
      <Image
        source={require('../../Assets/Images/search.png')}
        style={{height: 20, width: 20}}
      />
      <TextInput
        placeholder="Search"
        placeholderTextColor={'#A0A3BD'}
        style={styles.input}
        value={value}
        onChangeText={(text) => setTerm(text)}
      />
      <Image
        source={require('../../Assets/Images/menu.png')}
        style={{height: 20, width: 20}}
      />
    </View>
  );
};

export default Searchbox;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#4E4B66',
    borderWidth: 1,
    borderRadius: 6,
    padding: 8,
    height: 50,
    gap: 10,
    marginVertical:8
  },
  input: {
    flex: 1,
    height: 48,
    marginLeft:-8,
    fontSize: 14,
  },
});