import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../../Components/CustomInput/CustomInput';
import {useForm} from 'react-hook-form';
import CheckBox from '@react-native-community/checkbox';
import CustomButton from '../../Components/CustomButton/CustomButton';
import CustomSocialButton from '../../Components/CustomSocialButton/CustomSocialButton';

const SignUpScreen = () => {
  const [isChecked, setIsChecked] = useState(false);
  const {
    control,
    handleSubmit,
    formState: {errors},
    getValues,
  } = useForm({
    defaultValues: {},
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.header2}>Hello!</Text>
          <Text style={styles.smallHeader}>Signup to get Started</Text>
        </View>
        <View style={styles.formContainer}>
          <CustomTextInput
            control={control}
            name="username"
            labelText="Username"
            required
            isLabel
            rules={{
              required: {
                value: true,
                message: 'Username is required!',
              },
            }}
          />
          <View style={styles.spacing} />
          <CustomTextInput
            control={control}
            name="password"
            labelText="Password"
            required
            isLabel
            rules={{
              required: {
                value: true,
                message: 'Password is required!',
              },
            }}
          />
          <View style={styles.rememberMeContainer}>
            <View style={styles.checkboxContainer}>
              <CheckBox
                boxType="square"
                onCheckColor="#fff"
                onFillColor="#1877F2"
                onValueChange={() => setIsChecked(!isChecked)}
                value={isChecked}
                style={styles.CheckBox}
              />
              <Text style={styles.checkboxText}>Remember me</Text>
            </View>
          </View>
          <View style={styles.spacing} />
          <CustomButton value="Sign Up" />
          <View style={styles.orContainer}>
            <Text style={styles.checkboxText}>or continue with</Text>
          </View>
          <View style={styles.socialButtonContainer}>
            <CustomSocialButton value="Facebook" />
            <CustomSocialButton value="Google" />
          </View>
          <View style={styles.signUpContainer}>
            <Text style={styles.dontHaveAccount}>Already have an account?</Text>
            <TouchableOpacity>
              <Text style={styles.signUp}> Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    margin: 16,
  },
  headerContainer: {
    height: 155,
  },
  header2: {
    fontWeight: '700',
    fontSize: 48,
    fontFamily: 'Poppins-Regular',
    lineHeight: 72,
    letterSpacing: 0.12,
    color: '#1877F2',
  },
  smallHeader: {
    fontWeight: '400',
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    lineHeight: 30,
    letterSpacing: 0.12,
    color: '#4E4B66',
    width: '60%',
  },
  formContainer: {
    marginTop: 16,
  },
  spacing: {
    height: 10,
  },
  rememberMeContainer: {
    height: 24,
    flexDirection: 'row',
    gap: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  CheckBox: {
    height: 20,
    width: 20,
  },
  checkboxText: {
    fontWeight: '400',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#4E4B66',
    marginLeft: 6,
  },
  orContainer: {
    height: 21,
    marginVertical: 15,
    justifyContent: 'center',
    alignSelf: 'center',
    width: 114,
  },
  socialButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 231,
    height: 21,
    alignSelf: 'center',
    margin: 15,
  },
  dontHaveAccount: {
    fontWeight: '400',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#4E4B66',
  },
  signUp: {
    fontWeight: '400',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#1877F2',
  },
});
