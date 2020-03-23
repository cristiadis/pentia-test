import styled from 'styled-components/macro';
import { pxToRem } from 'styles';
import { breakpoints, above } from 'styles/responsive';
import { ReactComponent as PentiaLogo } from 'assets/logo.svg';

const { md, lg } = breakpoints;

type MenuProps = {
  active: boolean;
}

const Container = styled.nav`
  align-items: center;
  height: 100%;
  width: 73px;
  font-family: Montserrat, 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
  font-size: ${ pxToRem(20) };
  background: ${ ({ theme }) => theme.navBackground };
  color: ${ ({ theme }) => theme.color };
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  padding: 21px;

  ${ above(md) } {
  }
 
  ${ above(lg) } {
  }
`;

const Logo = styled(PentiaLogo)`
  fill: ${ ({ theme }) => theme.color };
`;

const Menu = styled.button<MenuProps>`
  width: 100%;
  position: relative;
  height: 100%;
  display: block;
  
  .container {
    width: 100%;
    height: 18px;
    position: absolute;
    top: 50%;
  }
  
  span {
    background: ${({ theme }) => theme.logoColor};
    width: 100%;
    height: ${pxToRem(1)};
    display: block;
    margin: ${pxToRem(-2)} 0 0;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transition: 0.3s ease;
    
    &:first-child {
      top: 0;
      opacity: ${({ active }) => (active ? 0 : 1)};
    }
    
    &:last-child {
      bottom: 0;
      opacity: ${({ active }) => (active ? 0 : 1)};
      top: auto;
    }
    
    &:nth-child(2) {
      transform: ${({ active }) => active && 'rotate(45deg)'};
    }
    
    &:nth-child(3) {
      transform: ${({ active }) => active && 'rotate(-45deg)'};
    }
  }
`;
export { Container, Logo, Menu };