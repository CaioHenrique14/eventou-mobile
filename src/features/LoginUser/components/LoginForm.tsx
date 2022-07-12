import React, { useState } from 'react';
import Typography from '../../../shared/components/Typography/Typography';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import BoxContent from '../../../shared/components/BoxContent/BoxContent';
import TextInput from 'react-native-textinput-with-icons';
import TouchableButton from '../../../shared/components/TouchableButton/TouchableButton';
import { StyleSheet, Text } from 'react-native';

export const LoginForm = ({}) => {

  return (
    <KeyboardAwareScrollView>
        <BoxContent center pad="30 0 0 0">
            <TextInput
        label="E-mail"
        leftIcon="mail"
        leftIconType="oct"
        leftIconColor="#00AFE7"
        underlineColor="transparent"
        borderWidth={1}
        borderColor="#00AFE7"
        borderRadius={20}
      />
      <BoxContent center pad="20 0 0 0" />
            <TextInput
        label="Senha"
        leftIcon="lock"
        leftIconType="oct"
        leftIconColor="#00AFE7"
        underlineColor="transparent"
        borderWidth={1}
        borderColor="#00AFE7"
        borderRadius={20}
      />
      <BoxContent center pad="89 0 0 0" />
        <TouchableButton text="Login" onPress={function (): void {
        throw new Error('Function not implemented.');
      } } />
      <Typography variant="bodyRegular" color="textGrey" semiBold size={16}>
      Esqueceu sua senha? <Text onPress={()=> someAction()} style = {{ color: '#00AFE7' }}> Clique aqui</Text>
      </Typography>
      <BoxContent center pad="155 0 0 0" />
      <Typography variant="bodyRegular" color="white" semiBold size={16}>
      Ainda não tem uma conta? <Text onPress={()=> someAction()} style = {{ color: '#00AFE7' }}> Cadastre-se</Text>
      </Typography>
      <BoxContent center pad="100 0 0 0" />
        </BoxContent>
        
    </KeyboardAwareScrollView>
  );
};
function someAction(): void {
  throw new Error('Function not implemented.');
}

