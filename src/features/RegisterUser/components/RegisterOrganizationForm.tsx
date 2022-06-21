import React, { useState } from 'react';
import { Alert, Image, TextInput, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Typography from '../../../shared/components/Typography/Typography';
import TouchableButton from '../../../shared/components/TouchableButton/TouchableButton';
import theme from '../../../shared/theme/theme';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as ImagePicker from 'expo-image-picker';
import { AddImageButton } from './AddImage/AddImage.styled';
import axios from 'axios';

interface FormData {
  completeName: string;
  email: string;
  password: string;
  confirmPassword: string;
  image: string;
}

const schema = yup
  .object({
    completeName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required(),
    image: yup.string(),
  })
  .required();

export const RegisterOrganizationForm = ({}) => {
  const [image, setImage] = useState('null');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (element: FormData) => {
    const data = {
      name: element.completeName,
      email: element.email,
      role: 'organization',
      password: element.password,
    };
    axios.post('http://192.168.1.4:3000/user', data).then(() => {
      Alert.alert('Sucesso', 'Seu cadastro foi realizado com sucesso', [
        {
          text: 'Fechar',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    });
  };

  return (
    <KeyboardAwareScrollView>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <AddImageButton onPress={pickImage}>
          {image === 'null' ? (
            <Image source={require('../assets/addImage.png')} />
          ) : (
            <Image
              source={{ uri: image }}
              style={{ width: 86, height: 86, borderRadius: 100 }}
            />
          )}
        </AddImageButton>
      </View>

      <Typography variant="bodyRegular" color="blue" semiBold>
        Nome
      </Typography>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={{
              borderColor: theme.palette.blue,
              borderStyle: 'solid',
              borderBottomWidth: 1,
              marginBottom: 30,
              color: '#979797',
              height: 30,
            }}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Exemplo: Camila Freitas"
            placeholderTextColor={'#979797'}
          />
        )}
        name="completeName"
      />
      {errors.completeName && (
        <Typography
          variant="bodySmall"
          color="white"
          style={{ marginTop: -25, marginBottom: 25 }}>
          Campo obrigatório.
        </Typography>
      )}

      <Typography variant="bodyRegular" color="blue" semiBold>
        Email
      </Typography>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={{
              borderColor: theme.palette.blue,
              borderStyle: 'solid',
              borderBottomWidth: 1,
              marginBottom: 30,
              color: '#979797',
              height: 30,
            }}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Exemplo: email@email.com"
            placeholderTextColor={'#979797'}
          />
        )}
        name="email"
      />
      {errors.email?.type == 'required' && (
        <Typography
          variant="bodySmall"
          color="white"
          style={{ marginTop: -25, marginBottom: 25 }}>
          Campo obrigatório.
        </Typography>
      )}
      {errors.email?.type == 'email' && (
        <Typography
          variant="bodySmall"
          color="white"
          style={{ marginTop: -25, marginBottom: 25 }}>
          Email em formato errado.
        </Typography>
      )}
      <Typography variant="bodyRegular" color="blue" semiBold>
        Senha
      </Typography>

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={{
              borderColor: theme.palette.blue,
              borderStyle: 'solid',
              borderBottomWidth: 1,
              marginBottom: 30,
              color: '#979797',
              height: 30,
            }}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Digite sua senha"
            placeholderTextColor={'#979797'}
            secureTextEntry={true}
          />
        )}
        name="password"
      />
      {errors.password && (
        <Typography
          variant="bodySmall"
          color="white"
          style={{ marginTop: -25, marginBottom: 25 }}>
          Campo obrigatório.
        </Typography>
      )}

      <Typography variant="bodyRegular" color="blue" semiBold>
        Confirmar Senha
      </Typography>

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={{
              borderColor: theme.palette.blue,
              borderStyle: 'solid',
              borderBottomWidth: 1,
              marginBottom: 30,
              color: '#979797',
              height: 30,
            }}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Digite sua senha"
            placeholderTextColor={'#979797'}
            secureTextEntry={true}
          />
        )}
        name="confirmPassword"
      />
      {errors.confirmPassword?.type === 'oneOf' && (
        <Typography
          variant="bodySmall"
          color="white"
          style={{ marginTop: -25, marginBottom: 25 }}>
          As senhas devem corresponder.
        </Typography>
      )}
      {errors.confirmPassword?.type === 'required' && (
        <Typography
          variant="bodySmall"
          color="white"
          style={{ marginTop: -25, marginBottom: 25 }}>
          Campo obrigatório.
        </Typography>
      )}
      <TouchableButton text="Cadastrar" onPress={handleSubmit(onSubmit)} />
    </KeyboardAwareScrollView>
  );
};
