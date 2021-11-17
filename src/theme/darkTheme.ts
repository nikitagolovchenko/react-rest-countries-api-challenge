import { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
  spacing: {
    0: '0',
    1: '8px',
    2: '16px',
    3: '20px',
    4: '40px'
  },
  borderRadius: '4px',
  colors: {
    body: 'hsl(207, 26%, 17%)',
    primary: 'hsl(0, 0%, 100%)',
    secondary: 'hsl(209, 23%, 22%)',
  },
  breakpoints: {
    phone: '480px',
    tablet: '768px',
    desktop: '1024px',
    widescreen: '1200px',
  },
  typography: {
    fontSize: {
      sm: '14px',
      lg: '16px',
    },
    fontWeight: {
      light: '300',
      semiBold: '600',
      extraBold: '800',
    },
    fontFamily: '"Nunito Sans", sans-serif',
  },
  boxShadow: '0 0 4px rgba(0,0,0,0.5)'
};
