import axios, {AxiosRequestConfig} from 'axios';
import {Alert} from 'react-native';
// import {baseUrl} from '../constants/constantValues';
// import networkManager from '../helper/internetServicers';
import {baseUrl, apiKey} from '../Constants/ConstantValues';
interface ApiRequest {
  category?: string;
  type?: string;
}


export const dataManagerApiRequest = async ({
category,
}: ApiRequest) => {
  console.log(buildUrl(category))
  const config: AxiosRequestConfig = {
    method: 'GET',
    maxBodyLength: Infinity,
    url: buildUrl(category)
  };


  try {
    // const isNetworkAvailable = await networkManager.isNetworkAvailable();
    // if (isNetworkAvailable) {
      const response = await axios.request(config);
      console.log(response.data.articles[0])
      return response;
    // } else {
      Alert.alert('Please connect to the internet');
      throw new Error('internet Error');
      // return
    // }
  } catch (error) {
    console.log('An error occurred:', error.response.data);
    return error.response.data
    // throw error.response.data;
    // return error
  }
};

const buildUrl = (  category) => {
  return `${baseUrl}top-headlines?language=en&country=in${category ? '&category='+category:''}&apiKey=${apiKey}`;
};