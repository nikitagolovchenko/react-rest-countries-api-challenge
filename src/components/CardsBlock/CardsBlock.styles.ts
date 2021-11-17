import styled from 'styled-components';

export const CardsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -${({ theme }) => theme.spacing[3]};
`;

export const CardHolder = styled.div`
  width: 100%;
  max-width: 320px;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  margin: 0 auto;
  margin-bottom: ${({ theme }) => theme.spacing[4]};

  @media(min-width: ${({theme}) => theme.breakpoints.tablet}) {
    max-width: none;
    margin-left: 0;
    margin-right: 0;
    width: 50%;
  }

  @media(min-width: ${({theme}) => theme.breakpoints.desktop}) {
    width: 25%;
  }
`;

export const NotFound = styled.strong`
  display: block;
  text-align: center;
  font-size: ${({theme}) => theme.typography.fontSize.lg};
  font-weight: ${({theme}) => theme.typography.fontWeight.semiBold};
`;