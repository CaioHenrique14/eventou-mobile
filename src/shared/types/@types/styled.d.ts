import 'styled-components/native';
import IThemeInterface from '../../theme/ITheme'
declare module 'styled-components/native'{
  export interface DefaultTheme extends IThemeInterface{}
}

