import styled from 'styled-components/macro';
import { breakpoints, above } from 'styles/responsive';
import { ReactComponent as Zeppelin } from "../../../../assets/zeppeliner.svg";

const { sm, md, lg } = breakpoints;

const Heading = styled.h1`
  font-size: 26px;
  line-height: 1.2;
  margin: 0;
  
  ${ above(sm)  } {
    font-size: 56px;
  }
`;

const SubHeading = styled.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  margin: 0 0 20px;
  
  ${ above(sm)  } {
    font-size: 25px;
    margin: 0 0 40px;
  }
`;

const BodyText = styled.p`
  font-size: 14px;
  line-height: 1.4;
  
  ${ above(sm)  } {
    font-size: 20px;
    line-height: 1.5;
  }
`;

const ZeppelinIcon = styled(Zeppelin)`
  margin: 0% 33% 7%;
  max-width: 265px;
  max-height: 150px;
  
  ${ above(md) } {
    margin: 0% 33% 7%;
  }
 
  ${ above(lg) } {
    margin: 0 34% 7%;
  }
`;

export { Heading, SubHeading, BodyText, ZeppelinIcon };