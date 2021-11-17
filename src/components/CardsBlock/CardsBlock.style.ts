import styled from 'styled-components';

export const CardsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -${({ theme }) => theme.spacing[3]};
`;

export const CardHolder = styled.div`
  width: 25%;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

export const NotFound = styled.strong`
  display: block;
  text-align: center;
  font-size: ${({theme}) => theme.typography.fontSize.lg};
  font-weight: ${({theme}) => theme.typography.fontWeight.semiBold};
`;