import styled from 'styled-components/macro';
import { pxToRem } from 'styles';
import { breakpoints, above } from 'styles/responsive';
import { ReactComponent as PentiaLogo } from 'assets/logo.svg';
import { NavLink } from 'react-router-dom';

const { sm } = breakpoints;

type isNavOpen = {
  isOpen: boolean;
}

interface MenuProps extends isNavOpen {}
interface NavBarProps extends isNavOpen {}

const Container = styled.nav<NavBarProps>`
  height: ${({isOpen}) => isOpen ? '100vh' : '73px' };
  transition: height 400ms cubic-bezier(0.215, 0.61, 0.355, 1);
  width: 100vw;
  font-size: ${ pxToRem(20) };
  background: ${ ({ theme }) => theme.navBackground };
  color: ${ ({ theme }) => theme.color };
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  padding: 21px;
  display: flex;
  justify-content: space-between;

  ${ above(sm) } {
    height: 100vh;
    width: ${({isOpen}) => isOpen ? '400px' : '73px' };
    transition: width 400ms cubic-bezier(0.215, 0.61, 0.355, 1);
    font-size: ${ pxToRem(20) };
    background: ${ ({ theme }) => theme.navBackground };
    color: ${ ({ theme }) => theme.color };
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    padding: 21px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;

const Logo = styled(PentiaLogo)`
  fill: ${ ({ theme }) => theme.color };
  height: 100%;
  max-height: 31px;
  
  ${ above(sm) } {
    height: auto;
    width: 100%;
    max-width: 31px;
  }
`;

const LogoLink = styled(NavLink)`
  display: inline-block;
  height: 31px;
`;

const Hamburger = styled.button<MenuProps>`
  width: 31px;
  max-height: 31px;
  position: relative;
  display: block;
  
  ${ above(sm) } {
    width: 100%;
    max-width: 31px;
    margin-top: -40px;
    top: 50%;
    align-self: flex-end;
  }
  
  .container {
    position: relative;
    width: 31px;
    height: 18px;
  }
  
  span {
    top: 50%;
    display: block;
    margin-top: -2px;
    background-color: ${({isOpen}) => isOpen ? 'transparent' : 'white'};
    
    ${ above(sm) } {
      background-color: white;
    }
  }
  
  span, 
  span:before, 
  span:after {
    position: absolute;
    width: 31px;
    height: 1px;
    transition-timing-function: ease;
    transition-duration: .15s;
    transition-property: transform;
  }
  
  span:after, 
  span:before {
    display: block;
    content: "";
    background-color: white;
    transition-property: top, bottom, transform;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-duration: .2s;
    transition-delay: ${({ isOpen }) => isOpen ? '0s, 0s, .1s': '.1s, .1s, 0s'};
  }
  
  span:before {
    top: ${({ isOpen }) => isOpen ? '0' : '-9px'};
    transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg)' : 'none'};
    
    ${ above(sm) } {
      top: -9px;
      transform: ${({ isOpen }) => isOpen ? 'translate3d(-9px,0,0) rotate(-45deg) scaleX(.8)' : 'none'};
    }
  }
  
  span:after {
    bottom: ${({ isOpen }) => isOpen ? '0' : '-9px'};
    transform: ${({ isOpen }) => isOpen ? 'rotate(45deg)' : 'none'};
    
    ${ above(sm) } {
      bottom: -9px;
      transform: ${({ isOpen }) => isOpen ? 'translate3d(-9px,0,0) rotate(45deg) scaleX(.8);' : 'none'};
    }
  }
`;

const MenuItem = styled(NavLink)`
  display: inline-block;
  color: white;
  text-decoration: none;
  margin: 20px 0;
  transition: opacity 500ms cubic-bezier(0.215, 0.61, 0.355, 1);
  position: relative;
  
  &:after {
    content: '';
    display: block;
    width: 0;
    bottom: -5px;
    position: absolute;
    height: 1px;
    background: white;
    transition: width 200ms cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  
  &:hover:after {
    width: 100%;
  } 
`;

const Menu = styled.ul<MenuProps>`
  top: 50%;
  left: 50%;
  transition: transform 500ms cubic-bezier(0.215, 0.61, 0.355, 1);
  transform: translate3d(${({isOpen}) => isOpen ? '-50%, -50%, 0' : '-50%, -150%, 0'});
  position: absolute;
  text-align: center;
  padding: 0;
  
  ${ above(sm) } {
    transform: translate3d(${({isOpen}) => isOpen ? '-50%, -50%, 0' : '-400%, -50%, 0'});
  }
  
  li {
    list-style: none;
    padding: 0;
  }
  
  a {
    opacity: ${({isOpen}) => isOpen ? 1 : 0};
  }
`;

export { Container, Logo, LogoLink, Hamburger, MenuItem, Menu };