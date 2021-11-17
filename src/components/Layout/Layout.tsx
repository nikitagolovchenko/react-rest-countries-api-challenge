import React, { FC } from 'react';
import Header from '../Header/Header';
import { Container, Main, Wrapper } from './../common';

const Layout: FC = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Container>{children}</Container>
      </Main>
    </Wrapper>
  );
};

export default Layout;
