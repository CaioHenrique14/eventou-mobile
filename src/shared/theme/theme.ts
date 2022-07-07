import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  palette: {
    black: '#000',
    white: '#fff',
    blue:'#00AFE7',
    darkGrey:'#131313',
    lightGrey:'#3F3D3D'
  },
  background: {
    default: '#fff',
  },
  text: {
    light: '#fff',
    default: '#10151D',
  },
  button: {
    primary: '#006AE3',
  },
  typography: {
    fontFamily: 'Dosis',
    headingDisplay: {
      fontFamily: 'Dosis',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '36px',
      lineHeight: '44px',
    },
    headingLarge: {
      fontFamily: 'Dosis',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '36px',
      lineHeight: '50px',
    },
    headingMedium: {
      fontFamily: 'Dosis',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '30px',
      lineHeight: '42px',
    },
    headingSmall: {
      fontFamily: 'Dosis',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '24px',
      lineHeight: '34px',
    },
    headline: {
      fontFamily: 'Dosis',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '20px',
      lineHeight: '28px',
    },
    subHeadline: {
      fontFamily: 'Dosis',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '18px',
      lineHeight: '26px',
    },
    bodyLarge: {
      fontFamily: 'Dosis',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '22px',
    },
    bodyMedium: {
      fontFamily: 'Dosis',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '20px',
    },
    bodySmall: {
      fontFamily: 'NunitoSans-Bold',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '12px',
      lineHeight: '16px',
    },
    bodyRegular: {
      fontFamily: 'Dosis',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '18px',
      lineHeight: '24px',
    },
    bodyCaption: {
      fontFamily: 'Dosis',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '11px',
      lineHeight: '13px',
    },
  },
  spacing: {
    s1: '16px',
    s2: '16px',
    s3: '24px',
    s4: '32px',
    s5: '40px',
  },
};


export default theme