import React from 'react';
import Typography from '../../../../shared/components/Typography/Typography';
import BoxContent from '../../../../shared/components/BoxContent/BoxContent';
import { Image } from 'react-native';
import { HeaderContentSC } from './createEventHeader.styled';
import { TextInput } from 'react-native-gesture-handler';

export interface IHeaderProps {
  eventCreator: string;
}

export const CreateEventHeader: React.FC<IHeaderProps> = ({}) => {
  return (
    <HeaderContentSC bg="headerGrey" pad="12 22 12 22" inline>
      <Image source={require('../../assets/userIcon.png')} />
      <BoxContent pad="0 0 0 20">
        <Typography variant="headline" color="white" bold>
          <TextInput />
        </Typography>
        <Typography variant="bodyLarge" color="white">
          Bar Cultural
        </Typography>
      </BoxContent>
    </HeaderContentSC>
  );
};
