import styled from 'styled-components/macro';
import { above, breakpoints } from "styles/responsive";

const { sm } = breakpoints;

const Input = styled.input`
  appearance: none;
  background: transparent;
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
  
  ${ above(sm) } {
    height: 50px;
    font-size: 17px;
  }
  
  &::placeholder {
    color: white;
    opacity: .5;
  }
`;

const Submit = styled.button`
  background: white;
  color: ${ ({ theme }) => theme.palette.secondary };
  height: 50px;
  width: 200px;
  border-radius: 6px;
  font-weight: bold;
  font-size: 16px;
  margin-top: 30px;
  
  ${ above(sm) } {
    height: 74px;
    width: 247px;
    font-size: 20px;
  }
`;

export { Input, Submit };