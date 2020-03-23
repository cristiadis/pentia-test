import styled from 'styled-components/macro';
import { breakpoints, above } from 'styles/responsive';
import { ReactComponent as Zeppelin } from "../../../../assets/zeppeliner.svg";

const { md, lg } = breakpoints;

const Heading = styled.h1`
  font-size: 56px;
  line-height: 1.2;
  margin: 0;
`;

const SubHeading = styled.h2`
  font-size: 25px;
  font-weight: 500;
  line-height: 1.5;
  margin: 0 0 40px;
`;

const BodyText = styled.p`
  font-size: 20px;
  line-height: 1.5;
`;

const ZeppelinIcon = styled(Zeppelin)`
  margin: 0% 33% 7%;
  
  ${ above(md) } {
    margin: 0% 33% 7%;
  }
 
  ${ above(lg) } {
    margin: 0 34% 7%;
  }
`;

export { Heading, SubHeading, BodyText, ZeppelinIcon };