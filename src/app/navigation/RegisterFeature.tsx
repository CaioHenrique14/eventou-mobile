import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RegisterScreen } from '../../features/RegisterUser/views/RegisterScreen';
import theme from '~/shared/theme/theme';

export type RootStackParamList = {
  Register: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RegisterFeatureNavigation = () => (
  <Stack.Navigator
    initialRouteName="Register"
    screenOptions={{ cardStyle: { backgroundColor: 'transparent' } }}>
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{
        title: "",
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default RegisterFeatureNavigation;
