import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Controller} from 'react-hook-form';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type CustomTextInputProps = {
  control: any;
  rules?: any;
  name: string;
  defaultValue?: any;
  disabled?: boolean;
  isLabel?: boolean;
  labelText?: string;
  testID?: string;
  required?: boolean;
  password?: boolean;
  iconName?: string;
};

const CustomTextInput = ({
  control,
  rules,
  name,
  defaultValue,
  disabled,
  isLabel,
  labelText,
  testID,
  required,
  password,
  iconName,
}: CustomTextInputProps) => {
  const [isShowPass, setIsShowPass] = useState(false);

  const passwordIcon = isShowPass ? 'eye-outline' : 'eye-off-outline';

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={rules}
        name={name}
        defaultValue={defaultValue}
        render={({field: {onChange, value}, fieldState: {error}}) => {
          return (
            <View>
              {isLabel && (
                <Text style={styles.labelText}>
                  {labelText}
                  {required && <Text style={{color: '#C30052'}}>*</Text>}
                </Text>
              )}
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
                  // editable={!disabled}
                  value={value}
                  style={styles.input}
                  secureTextEntry={password && !isShowPass}
                />
                {iconName && error && (
                  <TouchableOpacity
                    style={{
                      height: 24,
                      width: 24,
                      justifyContent: 'center',
                      alignContent: 'center',
                    }}
                    onPress={() => onChange('')}>
                    <Icon name={iconName} size={22} color="#C30052" />
                  </TouchableOpacity>
                )}
                {password && (
                  <TouchableOpacity
                    style={{
                      height: 24,
                      width: 24,
                      justifyContent: 'center',
                      alignContent: 'center',
                    }}
                    onPress={() => setIsShowPass(!isShowPass)}>
                    <Icon name={passwordIcon} size={22} color="#4E4B66" />
                  </TouchableOpacity>
                )}
              </View>
              {error && (
                <View style={styles.errorView}>
                  <Icon name={'alert-circle-outline'} size={14} color="red" />
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
  },
  input: {
    flex: 1,
    height: 48,
    paddingHorizontal: 10,
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
});
