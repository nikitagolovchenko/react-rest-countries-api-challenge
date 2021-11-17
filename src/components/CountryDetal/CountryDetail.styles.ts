import styled from 'styled-components';
import { DescriptionList, SmallLink } from './../common';

export const Country = styled.article`
  ${DescriptionList} {
    margin-bottom: ${({ theme }) => theme.spacing[4]};

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      margin-bottom: 0;
    }
  }
`;

export const CountryRow = styled.div`
  margin: 0 -${({ theme }) => theme.spacing[3]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    align-items: center;
  }
`;

export const CountryCol = styled.div`
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing[3]};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 50%;
  }
`;

export const CountryImg = styled.img`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing[4]};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-bottom: 0;
  }
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
