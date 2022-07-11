import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RegisterScreen } from '../../features/RegisterUser/views/RegisterScreen';
import { CreateEventScreen } from '../../features/CreateEvent/views/CreateEventScreen';

export type RootStackParamList = {
  Register: undefined;
  CreateEvent: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RegisterFeatureNavigation = () => (
  <Stack.Navigator
    initialRouteName="CreateEvent"
    screenOptions={{ cardStyle: { backgroundColor: 'white' } }}>
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
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
