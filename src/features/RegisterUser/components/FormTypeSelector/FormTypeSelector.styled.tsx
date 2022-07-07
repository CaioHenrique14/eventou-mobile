import styled from 'styled-components/native';
import theme from '../../../../shared/theme/theme';

export const FormSelectorActive = styled.TouchableHighlight<{
  active: boolean;
}>`
  background-color: ${({ active }) =>
    active ? theme.palette.blue : theme.palette.lightGrey};
  height: 46px;
  width: 205px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  justify-content: center;
`;
