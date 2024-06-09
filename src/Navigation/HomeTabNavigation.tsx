import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const Tab = createBottomTabNavigator();
const ProfileStack = createStackNavigator();

const HomeTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;
          size = 20;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Explore') {
            iconName = 'compass-outline';
          } else if (route.name === 'BookMark') {
            iconName = 'bookmark-outline';
          } else if (route.name === 'Profile') {
            iconName = 'account-circle-outline';
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: '#1877F2',
        inactiveTintColor: '#4E4B66',
        labelStyle: {
          fontSize: 14, 
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Explore"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="BookMark"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigation;
