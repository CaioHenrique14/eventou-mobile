import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import Typography from '../../../shared/components/Typography/Typography';
import { RootStackParamList } from '../../../app/navigation/RegisterFeature';
import { ScrollView } from 'react-native-gesture-handler';
import BoxContent from '../../../shared/components/BoxContent/BoxContent';
import { ReturnButton } from './CreateEvent.styled';
import { Image } from 'react-native';
import { CreateEventHeader } from '../components/createEventHeader/createEventHeader';
type RegisterScreenProps = StackScreenProps<RootStackParamList, 'Register'>;

export const CreateEventScreen: React.FC<RegisterScreenProps> = ({}) => {
  return (
    <ScrollView>
      <BoxContent bg="mediumGrey">
        <BoxContent pad="10 26 8 26" inline>
          <ReturnButton onPress={() => console.log('oi')}>
            <Image source={require('../assets/left-arrow.png')} />
          </ReturnButton>
          <BoxContent pad="0 0 0 43" center>
            <Typography variant="headingLarge" color="white">
              Cadastra aí
            </Typography>
          </BoxContent>
        </BoxContent>

        <CreateEventHeader eventCreator="Bar Cultural" />
      </BoxContent>
    </ScrollView>
  );
};
