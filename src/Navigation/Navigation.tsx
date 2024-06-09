import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import LoginScreen from '../Screens/LoginScreen/LoginScreen';
import SignUpScreen from '../Screens/SignUpScreen/SignUpScreen';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import SplashScreen from '../Screens/SplashScreen/SplashScreen';
import HomeTabNavigation from './HomeTabNavigation';

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Signup"
      component={SignUpScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

const MainStack = () => (
  <Stack.Navigator>
    
    <Stack.Screen
      name="Home"
      component={HomeTabNavigation}
      options={{headerShown: false}}
    />
  </Stack.Navigator>

);

const RootNavigation = () => {
  const {isLogin} = useSelector(state => state.global);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Displayr splash screen for 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isLogin ? (
        <Stack.Screen name="MainStack" component={MainStack} />
      ) : (
        <Stack.Screen name="AuthStack" component={AuthStack} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigation;
