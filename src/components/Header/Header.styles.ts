import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderBlock = styled.header`
  padding: 25px 0;
  background-color: ${({theme}) => theme.colors.secondary};
  box-shadow: ${({theme}) => theme.boxShadow};
`;

export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLogo = styled(Link)`
  margin: 0;
  font-size: 20px;
  font-weight: ${({theme}) => theme.typography.fontWeight.extraBold};
  cursor: pointer;
  color: currentColor;
  text-decoration: none;

  @media(min-width: ${({theme}) => theme.breakpoints.tablet}) {
    font-size: 24px;
  }
`;