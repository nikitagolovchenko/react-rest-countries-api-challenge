import React, { FC } from 'react';
import { Container } from '../common';
import ToggleThemeBtn from '../ToggleThemeBtn/ToggleThemeBtn';
import { HeaderBlock, HeaderInner, HeaderLogo } from './Header.styles';

const Header: FC = () => {
  return (
    <HeaderBlock>
      <Container>
        <HeaderInner>
          <HeaderLogo to='/'>Where in the world?</HeaderLogo>
          <ToggleThemeBtn />
        </HeaderInner>
      </Container>
    </HeaderBlock>
  );
};

export default Header;
