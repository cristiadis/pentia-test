import React, { useState } from 'react';
import { Container, Logo, Menu } from "./styles";
import { NavLink } from 'react-router-dom';

const NavBar: React.FunctionComponent = (props) => {
  const [navActive, toggleNav] = useState(false);

  return (
    <Container>
      <NavLink to={'/'} exact>
        <Logo />
      </NavLink>
      <Menu
        active={navActive}
        onClick={() => toggleNav(!navActive)}
      >
        <div className="container">
          <span />
          <span />
          <span />
          <span />
        </div>
      </Menu>
    </Container>
  );
};

export default NavBar;
