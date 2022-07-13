import React from 'react';
import Typography from '../../../../shared/components/Typography/Typography';
import BoxContent from '../../../../shared/components/BoxContent/BoxContent';
import { Image } from 'react-native';
import { HeaderContentSC, TextInputSC } from './createEventHeader.styled';

export interface IHeaderProps {
  eventCreator: string;
}

export const CreateEventHeader: React.FC<IHeaderProps> = ({}) => {
  return (
    <HeaderContentSC bg="headerGrey" pad="12 22 12 22" inline>
      <Image source={require('../../assets/userIcon.png')} />
      <BoxContent pad="0 0 0 20">
        <TextInputSC placeholder="Nome do evento" />
        <Typography variant="bodyLarge" color="white">
          Bar Cultural
        </Typography>
      </BoxContent>
    </HeaderContentSC>
  );
};
