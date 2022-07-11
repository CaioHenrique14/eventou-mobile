import { ViewProps } from 'react-native';
import styled from 'styled-components/native';
import { IPalette } from '../../theme/ITheme';

export interface BoxContentProps extends ViewProps {
  pad?: string;
  marg?: string;
  bg?: keyof IPalette;
  w?: string;
  h?: string;
  inline?: boolean;
  center?: boolean;
  wrap?: boolean;
}

export const BoxContentSC = styled.View<BoxContentProps>`
  ${({
    theme,
    pad = '0 0 0 0',
    marg = '0 0 0 0',
    bg = 'transparent',
    w = 'auto',
    h = 'auto',
    inline = false,
    center = false,
    wrap = false,
  }) => {
    const [width, height] = buildSize(w, h);
    return {
      padding: buildSpace(pad),
      margin: buildSpace(marg),
      'background-color': theme.palette[bg],
      width,
      height,
      'flex-direction': inline ? 'row' : 'column',
      ...(center && {
        justifyContent: 'center',
        alignItems: 'center',
      }),
    };
  }}
`;

export const buildSize = (w: BoxContentProps['w'], h: BoxContentProps['h']) => {
  const sizes = [w, h];
  return sizes.map(s => {
    if (s !== 'auto') {
      if (typeof s === 'string') {
        if (s.includes('%') || s.includes('px')) {
          return s;
        }
        return `${s}px`;
      }
      if (typeof s === 'number') {
        return `${s}px`;
      }
    }
    return s;
  });
};
export const buildSpace = (spacings: string) => {
  const splitedSpaces = spacings.split(' ');
  const spacingns = splitedSpaces.map(s => `${s}px`).join(' ');
  return spacingns;
};
