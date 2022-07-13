import BoxContent from '../../../../shared/components/BoxContent/BoxContent';
import styled from 'styled-components/native';

export const HeaderContentSC = styled(BoxContent)`
  border-radius: 31px;
`;

export const TextInputSC = styled.TextInput.attrs({
  color: 'white',
  fontSize: 23,
  placeholderTextColor: 'grey',
})`
  font-family: 'DosisBold';
`;
