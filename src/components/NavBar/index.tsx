import React, { useEffect, useState } from 'react';
import { Container, Logo, LogoLink, Hamburger, Menu, MenuItem } from "./styles";
import { RouteComponentProps, withRouter } from "react-router";

interface NavBarProps extends RouteComponentProps {};

const NavBar: React.FunctionComponent<NavBarProps> = ({ location }) => {
  const [isOpen, toggleNav] = useState<boolean>(false);

  useEffect(() => {
    toggleNav(false);
  }, [location]);

  return (
    <Container isOpen={isOpen}>
      <LogoLink to={'/'} exact>
        <Logo />
      </LogoLink>
      <Hamburger
        isOpen={isOpen}
        onClick={() => toggleNav(!isOpen)}
      >
        <div className="container">
          <span />
        </div>
      </Hamburger>
      <Menu isOpen={isOpen}>
        <li>
          <MenuItem to={'/'} exact>Home</MenuItem>
        </li>
        <li>
          <MenuItem to={'/cases'} exact>Cases</MenuItem>
        </li>
        <li>
          <MenuItem to={'/services'} exact>Services</MenuItem>
        </li>
        <li>
          <MenuItem to={'/karriere'} exact>Karriere</MenuItem>
        </li>
        <li>
          <MenuItem to={'/nyt'} exact>Nyt</MenuItem>
        </li>
        <li>
          <MenuItem to={'/events'} exact>Events</MenuItem>
        </li>
        <li>
          <MenuItem to={'/om-pentia'} exact>Om Pentia</MenuItem>
        </li>
      </Menu>
    </Container>
  );
};

export default withRouter(NavBar);
