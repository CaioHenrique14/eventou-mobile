import React from 'react';
import { BoxContentSC, BoxContentProps } from './BoxContent.styled';

const BoxContent: React.FC<BoxContentProps> = ({
  children,
  ...boxContentSCProps
}) => {
  return <BoxContentSC {...boxContentSCProps}>{children}</BoxContentSC>;
};

export default BoxContent;
