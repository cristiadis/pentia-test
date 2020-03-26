import styled, { css } from 'styled-components/macro';
import { ReactComponent as UserGraph } from 'assets/illustration1.svg';
import { ReactComponent as LineGraph } from 'assets/illustration2.svg';
import { above, breakpoints } from "styles/responsive";
import { Col } from "react-styled-flexboxgrid";

const { sm } = breakpoints;

const Headline = styled.h2`
  font-size: 26px;
  line-height: 1.2;
  margin-bottom: 12%;
  
  ${ above(sm) } {
    font-size: 32px;
  }
`;

const Icon = css`
  height: 100px;
  
  ${ above(sm) } {
    height: 138px;
  }
`;

const UserGraphIcon = styled(UserGraph)`
  ${Icon};
`;

const LineGraphIcon = styled(LineGraph)`
  ${Icon};
`;

const StyledCol = styled(Col)`
  margin-top: 40px;
  margin-bottom: 20px;
  
  ${ above(sm) } {
    margin: 0;
  }
`;

const Description = styled.p`
  font-size: 14px;
  
  ${ above(sm) } {
    font-size: 17px;
  }
`;

export { Headline, UserGraphIcon, LineGraphIcon, StyledCol, Description };