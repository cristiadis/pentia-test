import styled from 'styled-components/macro';
import { pulse } from 'styles/keyframes';

const Button = styled.a`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  font-weight: 900;
  font-size: 12px;
  color: white;
  text-decoration: none;
`;

const Icon = styled.span`
  height: 40px;
  width: 30px;
  margin: 20px auto 0;
  display: block;
  
  span {
    animation: ${ pulse } 2.5s ease-in-out infinite;
    margin: 6px auto;
    background-color: white;
    display: block;
    border-radius: 50%;
  }
  
  span:nth-child(1) {
    width: 2px;
    height: 2px;
  }
  
  span:nth-child(2) {
    width: 3px;
    height: 3px;
    animation-delay: 200ms;
  }
  
  span:nth-child(3) {
    width: 4px;
    height: 4px;
    animation-delay: 400ms;
  }
`;

export { Button, Icon };