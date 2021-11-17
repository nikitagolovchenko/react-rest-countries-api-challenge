import styled from 'styled-components';
import { SmallLink } from './../common';

export const Country = styled.article``;

export const CountryRow = styled.div`
  margin: 0 -${({ theme }) => theme.spacing[3]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  display: flex;
  align-items: center;
`;

export const CountryCol = styled.div`
  width: 50%;
  padding: 0 ${({ theme }) => theme.spacing[3]};
`;

export const CountryImg = styled.img`
  width: 100%;
`;

export const CountryTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  font-size: 24px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.extraBold};
`;


export const BtnGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
`;