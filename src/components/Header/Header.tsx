import React, { FC } from 'react';
import { Container, H1 } from '../common';
import ToggleThemeBtn from '../ToggleThemeBtn/ToggleThemeBtn';
import { HeaderBlock, HeaderInner, HeaderLogo } from './Header.styles';

const Header: FC = () => {
  return (
    <HeaderBlock>
      <Container>
        <HeaderInner>
          <H1 marginBottom={0}>
            <HeaderLogo to='/'>Where in the world?</HeaderLogo>
          </H1>
          <ToggleThemeBtn />
        </HeaderInner>
      </Container>
    </HeaderBlock>
  );
};

export default Header;
