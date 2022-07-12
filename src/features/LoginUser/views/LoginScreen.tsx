import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import Typography from '../../../shared/components/Typography/Typography';
import { RootStackParamList } from '../../../app/navigation/RegisterFeature';
import { ScrollView } from 'react-native-gesture-handler';
import BoxContent from '../../../shared/components/BoxContent/BoxContent';
import { Image, ImageBackground, ImageBackgroundBase } from 'react-native';
import { LoginForm } from '../components/LoginForm';

type RegisterScreenProps = StackScreenProps<RootStackParamList, 'Register'>;

export const LoginScreen: React.FC<RegisterScreenProps> = ({}) => {
  return (
    <ScrollView>
      <BoxContent>
      <ImageBackground source={require('../assets/background.png')} resizeMode="cover" >
        <BoxContent center marg='160 0 0 0'>
        <Image source={require('../assets/logo.png')} style = {{width: 137, height: 79}} />
      </BoxContent>
      <LoginForm />
      </ImageBackground>
      </BoxContent>
    </ScrollView>
  );
};
