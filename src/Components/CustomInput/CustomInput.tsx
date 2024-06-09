import React from 'react';
import {View, Text, TextInput, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Controller} from 'react-hook-form';
// import {theme} from '../../helper/theme';

type CustomTextInputProps = {
  onChangeText?: (value: any) => void;
  textColor?: string;
  width?: string;
  errorText?: string;
  value?: string;
  iconBool?: boolean;
  name: string;
  control: any;
  rules?: any;
  defaultValue?: any;
  disabled?: boolean;
  isLabel?: boolean;
  labelText?: string;
  style?: any;
  testID?: string;
  required?: boolean
};
const CustomTextInput = ({
  control,
  rules,
  name,
  defaultValue,
  disabled,
  isLabel,
  labelText,
  style,
  testID,
  required
}: CustomTextInputProps) => {
  // render
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={rules}
        name={name}
        defaultValue={defaultValue}
        render={({
          field: {onChange, value},
          formState: {isSubmitted},
          fieldState: {error},
        }) => {
          return (
            <View>
              {isLabel && <Text style={styles.labelText}>{labelText}{required && <Text style={{color:'#C30052'}}>*</Text>}</Text>}
              <View
                style={[
                  styles.inputContainer,
                  error ? styles.errorInput : null,
                ]}>
                <TextInput
                  testID={testID}
                  onChangeText={(text: any) => {
                    onChange(text);
                  }}
                  editable={disabled}
                  value={value}
                  style={styles.input}
                />
                {error && (
                  <TouchableOpacity
                    style={{
                      height: 24,
                      width: 24,
                      justifyContent: 'center',
                      alignContent: 'center',
                    }}
                    onPress={()=>console.log('pressing')}
                    >
                    <Image
                      source={require('../../Assets/Images/Vector.png')}
                      height={16}
                      width={16}
                    />
                  </TouchableOpacity>
                )}
              </View>
              {isSubmitted && error && (
                <View style={styles.errorView}>
                  <Image
                    source={require('../../Assets/Images/Frame.png')}
                    
                  />
                  <Text style={styles.errorText}>{error?.message}</Text>
                </View>
              )}
            </View>
          );
        }}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    width: '100%',
    gap: 4,
  },
  labelText: {
    marginBottom: 4,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#4E4B66',
    // color: theme.textColor,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#4E4B66',
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    height: 50,
    gap: 10,
  },
  errorInput: {
    borderColor: '#C30052',
    backgroundColor: '#FFF3F8',
  },
  errorView: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    height: 21,
    width: 124,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 48,
    paddingHorizontal: 10,
    // color: theme.textColor,
    fontSize: 14,
  },
  errorText: {
    color: '#C30052',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    letterSpacing: 0.12,
    marginLeft: 5,
  },
  userImgIcon: {
    height: 25,
    width: 25,
  },
});
