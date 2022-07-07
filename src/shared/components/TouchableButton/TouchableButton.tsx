import React from 'react';
import Typography from '../Typography/Typography';
import TouchableButtonSC from './TouchableButton.styled';
export interface ButtonProps {
  text?: string;
  onPress: () => void;
}

const TouchableButton: React.FC<ButtonProps> = ({ children, text, onPress }) => (
  <TouchableButtonSC onPress={onPress}>
    <Typography variant="bodyLarge" color="light" align="center" semiBold>
      {children ?? text}
    </Typography>
  </TouchableButtonSC>
);

TouchableButton.defaultProps = {
  text: '',
};
export default TouchableButton;
