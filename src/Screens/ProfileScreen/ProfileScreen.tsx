import React, { useEffect, useState } from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  ActivityIndicator
} from 'react-native';
import Header from '../../Components/Header/Header';
import CustomButton from '../../Components/CustomButton/CustomButton';
import CustomTextInput from '../../Components/CustomInput/CustomInput';
import { useForm } from 'react-hook-form';
import ImagePicker from 'react-native-image-crop-picker';
import { useSelector, useDispatch } from 'react-redux';
import { setUserDetails } from '../../Redux/Reducers';

type Props = {
  navigation: any;
};

const ProfileScreen = ({ navigation }: Props) => {
  const [imageUri, setImageUri] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm({
    defaultValues: {},
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const dispatch = useDispatch();
  const { userDetails } = useSelector(state => state.global);

  
 

  const onValid = () => {
    const formData = getValues();
    const updatedUserDetails = { ...userDetails, ...formData, imageUri: imageUri };
    try {
      console.log(updatedUserDetails);
      dispatch(setUserDetails(updatedUserDetails));
      setIsLoading(true);
      Alert.alert('Successfully saved')
    } catch (e) {
      setIsLoading(false);
      Alert.alert(
        'Error',
        e.message,
        [
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed'),
          },
        ],
        { cancelable: false },
      );
    }
  };

  const __username = () => {
    return (
      <CustomTextInput
        control={control}
        defaultValue={userDetails?.user}
        name="username"
        labelText="Username"
        isLabel
      />
    );
  };

  const __fullname = () => {
    return (
      <CustomTextInput
        control={control}
        defaultValue={userDetails?.fullName}
        name="fullName"
        labelText="Full Name"
        isLabel
      />
    );
  };

  const __emailAddress = () => {
    return (
      <CustomTextInput
        control={control}
        defaultValue={userDetails?.email}
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
    );
  };

  const __mobileNumber = () => {
    return (
      <CustomTextInput
        control={control}
        defaultValue={userDetails?.phone}
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
    );
  };

  const pickImage = async () => {
    try {
      const image = await ImagePicker.openPicker({
        mediaType: 'photo',
        compressImageMaxHeight: 550,
        compressImageMaxWidth: 550,
        multiple: false,
        includeBase64: true,
        maxFiles: 1,
        compressImageQuality: 0.8,
      });
      const source = { uri: image.path };
      setImageUri(source);
      setIsLoading(false); 
    } catch (error) {
      Alert.alert('ImagePicker error:', error?.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Header  navigation={navigation}/>
        <View style={styles.imageContainer}>
          <View style={styles.mainCircle}>
            {imageUri ? (
              <Image source={{ uri: imageUri?.uri }} style={styles.image} />
            ) : (
              <View style={styles.image} />
            )}
            <TouchableOpacity
              style={styles.smallCircle}
              onPress={pickImage}>
              <Image
                source={require('../../Assets/Images/camera.png')}
                style={styles.smallImage}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.formContainer}>
          {__username()}
          {__fullname()}
          {__emailAddress()}
          {__mobileNumber()}
        </View>
      </View>
      <View style={styles.buttonContainer}>
        
          <CustomButton value="Next" onPress={handleSubmit(onValid)} />
        
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
    marginHorizontal: 24,
  },
  formContainer: {
    flex: 1,
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
    height: 16,
    width: 16,
  },
});

