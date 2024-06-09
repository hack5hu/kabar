import axios, { AxiosRequestConfig } from 'axios';
import { Alert } from 'react-native';
import { baseUrl, apiKey } from '../Constants/ConstantValues';

interface ApiRequest {
  category?: string;
  page?: number;
}

export const dataManagerApiRequest = async ({ category, page = 1 }: ApiRequest) => {
  console.log(buildUrl(category, page));
  const config: AxiosRequestConfig = {
    method: 'GET',
    maxBodyLength: Infinity,
    url: buildUrl(category, page),
  };
  try {
    const response = await axios.request(config);
    console.log(response)
    return response;
  } catch (error) {
    console.log('An error occurred:', error.response.data);
    return error.response.data;
  }
};

const buildUrl = (category?: string, page: number = 1) => {
  return `${baseUrl}top-headlines?language=en&country=in${category ? '&category=' + category : ''}&apiKey=${apiKey}`;
};
