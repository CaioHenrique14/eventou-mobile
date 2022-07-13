import styled from 'styled-components/native';
import theme from '../../../../shared/theme/theme';

export const AddEventImageButton = styled.TouchableHighlight`
  background-color: ${theme.palette.blue};
  border-radius: 100px;
  width: 60px;
  height: 60px;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
  top: -125%;
`;
