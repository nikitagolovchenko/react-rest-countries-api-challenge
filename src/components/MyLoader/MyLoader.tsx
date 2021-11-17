import React, { FC } from 'react';
import styled, { useTheme } from 'styled-components';

const LoaderHolder = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const Loader = styled.strong`
  font-size: 22px;
  font-weight: ${({theme}) => theme.typography.fontWeight.extraBold};
  text-align: center;
`;

const MyLoader: FC = () => {
  const theme = useTheme();

  return (
    <LoaderHolder>
      <Loader>Loading...</Loader>
    </LoaderHolder>
  );
};

export default MyLoader;
