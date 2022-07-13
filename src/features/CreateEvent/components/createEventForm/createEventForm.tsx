import React from 'react';
import { TextInput } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Typography from '../../../../shared/components/Typography/Typography';
import TouchableButton from '../../../../shared/components/TouchableButton/TouchableButton';
import theme from '../../../../shared/theme/theme';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import BoxContent from '../../../../shared/components/BoxContent/BoxContent';
import { AddEventImage } from '../addEventImage/addEventImage';

interface FormData {
  description: string;
  location: string;
  date: string;
  hour: string;
  value: string;
  contact: string;
}

const schema = yup
  .object({
    description: yup.string().required(),
    location: yup.string().required(),
    date: yup.string().required(),
    hour: yup.string().required(),
    value: yup.string(),
    contact: yup.string().required(),
  })
  .required();

export const CreateEventForm = ({}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (element: FormData) => {
    console.log(element);
  };

  return (
    <KeyboardAwareScrollView>
      <AddEventImage />
      <BoxContent marg="0 16 0 16">
        <Typography variant="bodyRegular" color="white" semiBold>
          Descrição
        </Typography>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={{
                borderColor: theme.palette.white,
                borderStyle: 'solid',
                borderBottomWidth: 1,
                marginBottom: 30,
                color: '#979797',
                height: 30,
              }}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Descrição"
              placeholderTextColor={'#979797'}
            />
          )}
          name="description"
        />
        {errors.description && (
          <Typography
            variant="bodySmall"
            color="white"
            style={{ marginTop: -25, marginBottom: 25 }}>
            Campo obrigatório.
          </Typography>
        )}

        <Typography variant="bodyRegular" color="white" semiBold>
          Localização
        </Typography>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={{
                borderColor: theme.palette.white,
                borderStyle: 'solid',
                borderBottomWidth: 1,
                marginBottom: 30,
                color: '#979797',
                height: 30,
              }}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Localização"
              placeholderTextColor={'#979797'}
            />
          )}
          name="location"
        />
        {errors.location?.type == 'required' && (
          <Typography
            variant="bodySmall"
            color="white"
            style={{ marginTop: -25, marginBottom: 25 }}>
            Campo obrigatório.
          </Typography>
        )}

        <Typography variant="bodyRegular" color="white" semiBold>
          Data e horário
        </Typography>

        <BoxContent inline>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={{
                  borderColor: theme.palette.white,
                  borderStyle: 'solid',
                  borderBottomWidth: 1,
                  marginBottom: 30,
                  color: '#979797',
                  height: 30,
                }}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Exemplo: 12/12/2000"
                placeholderTextColor={'#979797'}
              />
            )}
            name="date"
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={{
                  borderColor: theme.palette.white,
                  borderStyle: 'solid',
                  borderBottomWidth: 1,
                  marginBottom: 30,
                  color: '#979797',
                  height: 30,
                }}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Horário Inicio"
                placeholderTextColor={'#979797'}
              />
            )}
            name="hour"
          />
        </BoxContent>
        {errors.date?.type === 'required' && (
          <Typography
            variant="bodySmall"
            color="white"
            style={{ marginTop: -25, marginBottom: 25 }}>
            Campo obrigatório.
          </Typography>
        )}

        <Typography variant="bodyRegular" color="white" semiBold>
          Valor do lote atual
        </Typography>

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={{
                borderColor: theme.palette.white,
                borderStyle: 'solid',
                borderBottomWidth: 1,
                marginBottom: 30,
                color: '#979797',
                height: 30,
              }}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Exemplo: R$10,00"
              placeholderTextColor={'#979797'}
            />
          )}
          name="value"
        />

        <Typography variant="bodyRegular" color="white" semiBold>
          Contato
        </Typography>

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={{
                borderColor: theme.palette.white,
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
            />
          )}
          name="contact"
        />

        {errors.contact?.type === 'required' && (
          <Typography
            variant="bodySmall"
            color="white"
            style={{ marginTop: -25, marginBottom: 25 }}>
            Campo obrigatório.
          </Typography>
        )}
        <TouchableButton text="Cadastrar" onPress={handleSubmit(onSubmit)} />
      </BoxContent>
    </KeyboardAwareScrollView>
  );
};
