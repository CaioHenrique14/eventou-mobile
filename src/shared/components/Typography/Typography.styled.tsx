import { IPalette, ITypography, IText } from "../../../shared/theme/ITheme";
import styled from "styled-components/native";
import { TextProps } from "react-native";

export default styled.Text<TypographySCProps>`
  ${({
    theme,
    variant = "title",
    color = "default",
    size,
    uppercase,
    bold,
    semiBold,
    align,
  }) => {
    const { typography, palette } = theme;
    return {
      "font-family": semiBold
        ? "DosisSemiBold"
        : bold
        ? "DosisBold"
        : "DosisRegular",
      "line-height": typography[variant as TTypography].lineHeight,
      "font-size": size || typography[variant as TTypography].fontSize,
      color:
        theme.text[color as keyof IText] ||
        palette[color as keyof IPalette] ||
        palette.black,
      "text-transform": uppercase ? "uppercase" : "none",
      "text-align": align,
    };
  }}
`;
export type TTextColor = keyof IText | keyof IPalette;
export type TTypography = keyof Omit<ITypography, "fontFamily">;
export interface TypographySCProps extends TextProps {
  bold?: boolean;
  semiBold?: boolean;
  variant?: keyof ITypography;
  color?: TTextColor;
  size?: number;
  uppercase?: boolean;
  align?: string;
}
export interface TextPropsItem {
  fallbackText: string;
}
