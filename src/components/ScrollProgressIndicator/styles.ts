import styled from 'styled-components';
import { above, breakpoints } from "../../styles/responsive";

const { sm } = breakpoints;

type BarProps = {
  scrollPercentage: number;
}

const Bar = styled.div<BarProps>`
  width: 100vw;
  height: 5px;
  position: fixed;
  z-index: 10;
  opacity: ${({scrollPercentage}) => scrollPercentage === 0 ? '0' : '1'};
  transition: opacity 300ms ease-in-out, background 300ms ease-in-out;
  top: 0px;
  background: linear-gradient(
    to right,
    ${({theme}) => theme.palette.secondary} ${({scrollPercentage}) => scrollPercentage + '%'},
    #d8d8d8 0);
    
  ${ above(sm) } {
    width: 10px;
    height: 100vh;
    right: 0;
    top: 0;
    background: linear-gradient(to bottom,
      ${({theme}) => theme.palette.secondary} ${({scrollPercentage}) => scrollPercentage + '%'},
      #d8d8d8 0
    );
  }
`;

export { Bar };