import styled from 'styled-components/macro';
import { above, breakpoints } from "styles/responsive";

const { sm } = breakpoints;

const Input = styled.input`
  appearance: none;
  background: transparent;
  transition: box-shadow 200ms ease-in-out;
  border: 0;
  outline: 0;
  color: white;
  border-bottom: 3px solid white;
  border-radius: 0;
  width: 100%;
  height: 30px;
  font-size: 16px;
  margin-bottom: 20px;
  box-sizing: border-box;
  
  &::placeholder {
    color: white;
    opacity: .5;
  }
  
  &:focus {
    box-shadow: 0px 5px 2px -2px rgba(0, 0, 0, .2);
  }
  
  ${ above(sm) } {
    height: 50px;
    font-size: 17px;
  }
`;

const Submit = styled.button`
  background: white;
  transition: background 200ms ease-in-out, box-shadow 200ms ease-in-out;
  color: ${ ({ theme }) => theme.palette.secondary };
  height: 50px;
  width: 200px;
  border-radius: 6px;
  font-weight: bold;
  font-size: 16px;
  margin-top: 30px;
  
  &:hover, &:focus {
    box-shadow: 0px 4px 2px rgba(0, 0, 0, .2);
  }
  
  &:active {
    box-shadow: none;
    transform: translate(0, 2px);
  }
  
  ${ above(sm) } {
    height: 74px;
    width: 247px;
    font-size: 20px;
  }
`;

export { Input, Submit };