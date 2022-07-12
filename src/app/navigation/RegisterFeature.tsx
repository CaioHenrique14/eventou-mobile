import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RegisterScreen } from '../../features/RegisterUser/views/RegisterScreen';
import { CreateEventScreen } from '../../features/CreateEvent/views/CreateEventScreen';
import { LoginScreen } from '../../features/LoginUser/views/LoginScreen';

export type RootStackParamList = {
  Register: undefined;
  Login: undefined;
  CreateEvent: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RegisterFeatureNavigation = () => (
  <Stack.Navigator
    initialRouteName="Login"
    screenOptions={{ cardStyle: { backgroundColor: 'transparent' } }}>
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{
        title: '',
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{
        title: '',
        headerShown: false,
      }}
    />
    <Stack.Screen 
      name="CreateEvent"
      component={CreateEventScreen}
      options={{
        title: '',
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default RegisterFeatureNavigation;
