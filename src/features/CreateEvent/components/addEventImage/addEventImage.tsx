import React, { useState } from 'react';
import BoxContent from '../../../../shared/components/BoxContent/BoxContent';
import { Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AddEventImageButton } from './addEventImage.styled';

export interface IEventImageProps {}

export const AddEventImage: React.FC<IEventImageProps> = ({}) => {
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

  return (
    <BoxContent>
      <BoxContent w="100%" h="290px">
        {image === 'null' ? (
          <Image
            source={require('../../assets/noImage.png')}
            style={{ width: '100%', height: '100%', opacity: '0.6' }}
          />
        ) : (
          <Image
            source={{ uri: image }}
            style={{ width: '100%', height: '100%', opacity: '0.6' }}
          />
        )}
      </BoxContent>
      <BoxContent pad="0 16 0 0">
        <AddEventImageButton onPress={pickImage}>
          <Image
            source={require('../../../RegisterUser/assets/addImage.png')}
          />
        </AddEventImageButton>
      </BoxContent>
    </BoxContent>
  );
};
