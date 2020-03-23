import styled from 'styled-components/macro';

const Input = styled.input`
  appearance: none;
  background: transparent;
  border: 0;
  outline: 0;
  color: white;
  border-bottom: 3px solid white;
  width: 100%;
  height: 40px;
  font-size: 17px;
  margin-bottom: 15px;
  
  &::placeholder {
    color: white;
    opacity: .5;
  }
`;

const Submit = styled.button`
  background: white;
  color: ${ ({ theme }) => theme.palette.secondary };
  height: 74px;
  width: 247px;
  border-radius: 6px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 30px;
`;

export { Input, Submit };