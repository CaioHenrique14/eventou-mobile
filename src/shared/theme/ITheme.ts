export interface IPalette {
  black: string;
  white: string;
  blue: string;
  darkGrey: string;
  lightGrey: string;
  mediumGrey: string;
  headerGrey: string;
}
export interface ISpacing {
  s1: string;
  s2: string;
  s3: string;
  s4: string;
  s5: string;
}

export interface IBackground {
  default: string;
}

export interface IText {
  light: string;
  default: string;
}

export interface IButton {
  primary: string;
}

export interface IFontFamily {
  fontFamily?: string;
  fontStyle: string;
  lineHeight: string;
  fontWeight: number | string;
  fontSize: string;
}

export interface ITypography {
  fontFamily: string;
  headingDisplay: IFontFamily;
  headingLarge: IFontFamily;
  headingMedium: IFontFamily;
  headingSmall: IFontFamily;
  headline: IFontFamily;
  subHeadline: IFontFamily;
  bodyLarge: IFontFamily;
  bodyMedium: IFontFamily;
  bodySmall: IFontFamily;
  bodyRegular: IFontFamily;
  bodyCaption: IFontFamily;
}

interface IThemeInterface {
  palette: IPalette;
  background: IBackground;
  text: IText;
  button: IButton;
  typography: ITypography;
  spacing: ISpacing;
}

export default IThemeInterface;
