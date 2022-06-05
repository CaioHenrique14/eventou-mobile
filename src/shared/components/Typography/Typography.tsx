import React, { PropsWithChildren } from 'react';
import TypographySC, { TypographySCProps, TextPropsItem } from './Typography.styled';
const Typography = (props: PropsWithChildren<TypographySCProps & TextPropsItem>) => (
  <TypographySC {...props}>{props.children ?? props.fallbackText}</TypographySC>
);
Typography.defaultProps = {
  fallbackText: '',
  color: 'default',
  variant: 'headline',
};
export default Typography;