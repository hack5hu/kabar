import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../Components/Header/Header';
import CustomButton from '../../Components/CustomButton/CustomButton';
import CustomTextInput from '../../Components/CustomInput/CustomInput';
import {useForm} from 'react-hook-form';

const ProfileScreen = () => {
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
        <Header />
        <View style={styles.imageContainer}>
          <View style={styles.mainCircle}>
            {/* <Image
              source={require('../..//Assets/Images/Vector.png')} // replace with your image source
              style={styles.image}
            /> */}
            <View style={styles.image} />
            <View style={styles.smallCircle}>
              {/* <Image
                source={require('../../Assets/Images/Vector.png')} // replace with your image source
                style={styles.smallImage}
              /> */}
              <View style={styles.smallImage} />
            </View>
          </View>
        </View>
        <View style={styles.formContainer}>
          <CustomTextInput
            control={control}
            name="username"
            labelText="Username"
            isLabel
            rules={{
              required: {
                value: true,
                message: 'Username is required!',
              },
            }}
          />
          <CustomTextInput
            control={control}
            name="fullName"
            labelText="Full Name"
            isLabel
            rules={{
              required: {
                value: true,
                message: 'Full Name is required!',
              },
            }}
          />
          <CustomTextInput
            control={control}
            name="email"
            required
            labelText="Email Address"
            isLabel
            rules={{
              required: {
                value: true,
                message: 'Email Address is required!',
              },
            }}
          />
          {/* <View style={styles.spacing} /> */}
          <CustomTextInput
            control={control}
            name="phone"
            required
            labelText="Phone Number"
            isLabel
            rules={{
              required: {
                value: true,
                message: 'Phone Number is required!',
              },
            }}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton value="Next" />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
    marginTop: 24,
    marginHorizontal:24
  },
  formContainer: {
    flex: 1,
  },
  spacing: {
    height: 10,
  },
  buttonContainer: {
    height: 130,
    backgroundColor: '#fff',
    justifyContent: 'center',
    shadowOffset: {width: 0, height: -2},
    shadowRadius: 4,
    elevation: 5,
    borderTopWidth: 0.5,
    borderTopColor: '#ddd',
    padding: 24,
    zIndex: 1,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  mainCircle: {
    height: 140,
    width: 140,
    borderRadius: 70,
    backgroundColor: '#EEF1F4',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
  },
  image: {
    height: 140,
    width: 140,
    borderRadius: 70,
  },
  smallCircle: {
    height: 30,
    width: 30,
    borderRadius: 50,
    backgroundColor: '#1877F2',
    position: 'absolute',
    top: 115,
    left: 93,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
  },
  smallImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});
