import React from "react";
import Typography from "../../../../shared/components/Typography/Typography";
import {FormSelectorActive } from "./FormTypeSelector.styled";
export interface ButtonProps {
  text?: string;
  actived: boolean;
  onPress?: ()=>void;
}

const FormTypeSelector: React.FC<ButtonProps> = ({ children, text, actived}) => (
    <FormSelectorActive active={actived}>
      <Typography variant="bodyLarge" color="light" align="center" semiBold>
        {children ?? text}
      </Typography>
    </FormSelectorActive>
);

FormTypeSelector.defaultProps = {
  text: "",
};
export default FormTypeSelector;
