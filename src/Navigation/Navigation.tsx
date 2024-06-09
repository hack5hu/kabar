import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import LoginScreen from '../Screens/LoginScreen/LoginScreen';
import SignUpScreen from '../Screens/SignUpScreen/SignUpScreen';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';


const Stack = createStackNavigator();

const StackNavigation = () => {
  // render
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name={'Home'}
        component={HomeScreen}
        // options={{
        //   title: 'Home ',
        //   headerStyle: {
        //     backgroundColor: '#54d6b6',
        //   },
        //   headerTitleAlign: 'center',
        //   headerTintColor: '#fff',
        //   headerTitleStyle: {
        //     fontWeight: 'bold',
        //   },
        //   headerLeft: false,
        // }}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const Auth = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name={'Login'}
        component={LoginScreen}
        options={{
          title: 'Login',
          headerStyle: {
            // backgroundColor: theme.divBackground,
          },
          headerTitleAlign: 'center',
        //   headerTintColor: theme.textColor,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name={'Register'}
        component={SignUpScreen}
        options={{
          title: 'Register Screen',
          headerStyle: {
            // backgroundColor: theme.divBackground,
          },
          headerTitleAlign: 'center',
        //   headerTintColor: theme.textColor,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

const RootNavigation = () => {
  const {isLogin} = useSelector(state => state.global);
  console.log(isLogin);
  return <>{isLogin ? <StackNavigation /> : <Auth />}</>;
};
export default RootNavigation;