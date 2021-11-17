import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    spacing: {
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
    };
    borderRadius: string;
    colors: {
      body: string;
      primary: string;
      secondary: string;
      gray?: string;
    };
    breakpoints: {
      phone: string;
      tablet: string;
      desktop: string;
      widescreen: string;
    };
    typography: {
      fontSize: {
        sm: string;
        lg: string;
      };
      fontWeight: {
        light: string;
        semiBold: string;
        extraBold: string;
      };
      fontFamily: string;
    };
    boxShadow: string;
  }
}
