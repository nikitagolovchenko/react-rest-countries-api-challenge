import { createGlobalStyle, css } from 'styled-components';

export const cssSpacing = css`
  margin: 0 0 ${({ theme }) => theme.spacing[2]};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: ${({theme}) => theme.typography.fontFamily};
    font-size: ${({theme}) => theme.typography.fontSize.sm};
  }
  body {
    margin: 0;
    background-color: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({theme}) => theme.typography.fontSize.sm};
    font-family: ${({theme}) => theme.typography.fontFamily};
    font-weight: ${({theme}) => theme.typography.fontWeight.light};
  };

  h1,h2,h3,h4,h5,h6 {
    ${cssSpacing}
  };

  p {
    ${cssSpacing}
  }

  img {
    display: inline-block;
    vertical-align: top;
    max-width: 100%;
    height: auto;
  }
`;

