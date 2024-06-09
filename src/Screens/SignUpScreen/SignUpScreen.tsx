import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomTextInput from '../../Components/CustomInput/CustomInput';
import {useForm, SubmitHandler} from 'react-hook-form';
import CheckBox from '@react-native-community/checkbox';
import CustomButton from '../../Components/CustomButton/CustomButton';
import CustomSocialButton from '../../Components/CustomSocialButton/CustomSocialButton';
import {passwordValidation, usernameValidation} from '../../Helper/helper';
import {useDispatch} from 'react-redux';
import {
  setIsLogin,
  setLoginUserDetails,
  setUserDetails,
} from '../../Redux/Reducers';

type FormData = {
  username: string;
  password: string;
};

const SignUpScreen = ({navigation}: {navigation: any}) => {
  const [isChecked, setIsChecked] = useState(true);
  const {
    control,
    handleSubmit,
    formState: {errors},
    getValues,
    setError,
  } = useForm<FormData>({
    defaultValues: {},
    mode: 'onChange',
    reValidateMode: 'onChange',
  });
  const {navigate} = navigation;
  const dispatch = useDispatch();

  const onValid: SubmitHandler<FormData> = () => {
    console.log('Validation successful');
    const {username, password} = getValues();
    const data = {user: username, pass: password};
    dispatch(setLoginUserDetails(data));
    dispatch(setIsLogin(true));
    dispatch(setUserDetails({user: username, pass: password}));
  };

  const __username = () => (
    <CustomTextInput
      control={control}
      name="username"
      labelText="Username"
      required
      isLabel
      rules={usernameValidation}
      iconName="close"
    />
  );

  const __passwordField = () => (
    <CustomTextInput
      control={control}
      name="password"
      labelText="Password"
      required
      password
      isLabel
      rules={passwordValidation}
    />
  );

  const __checkbox = () => (
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
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.header2}>Hello!</Text>
          <Text style={styles.smallHeader}>Signup to get Started</Text>
        </View>
        <View style={styles.formContainer}>
          {__username()}
          {__passwordField()}
          <View style={styles.rememberMeContainer}>{__checkbox()}</View>
          <View style={styles.spacing} />
          <CustomButton value="Sign Up" onPress={handleSubmit(onValid)} />
          <View style={styles.orContainer}>
            <Text style={styles.checkboxText}>or continue with</Text>
          </View>
          <View style={styles.socialButtonContainer}>
            <CustomSocialButton value="Facebook" />
            <CustomSocialButton value="Google" />
          </View>
          <View style={styles.signUpContainer}>
            <Text style={styles.dontHaveAccount}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigate('Login')}>
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
    backgroundColor: '#fff',
  },
  innerContainer: {
    marginHorizontal: 24,
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
    fontWeight: '600',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#1877F2',
  },
});
