import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Container = styled.div`
  max-width: 1260px;
  padding: 0 30px;
  margin: 0 auto;
`;

export const Main = styled.main`
  flex-grow: 1;
  padding: ${({ theme }) => theme.spacing[4]} 0;
`;

export const DescriptionList = styled.ul``;

interface DescriptionItemProps {
  response?: boolean;
}

export const DescriptionItem = styled.li<DescriptionItemProps>`
  margin-bottom: 10px;
  display: ${props => (props.response ? 'block' : 'flex')};
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
  }

  Strong {
    margin-right: ${props => (props.response ? '0' : '5px')};
    margin-bottom: ${props => (props.response ? '10px' : '0')};

    ${props => props.response && {
      display: 'block',
    }}

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      margin-bottom: 0;
      margin-right: 5px;
    }
  }
`;

export const Strong = styled.strong`
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
`;

export const SmallLink = styled(Link)`
  margin: 5px 5px 5px 0;
  padding: 5px 15px;
  display: inline-flex;
  align-items: center;
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  color: currentColor;
  text-decoration: none;
`;

export const BackLink = styled.button`
  min-width: 100px;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  padding: 5px 15px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  color: currentColor;
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  background-color: transparent;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  cursor: pointer;

  > svg {
    width: 18px;
    height: 18px;
    margin-right: 5px;
  }
`;
