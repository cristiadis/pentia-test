import styled from 'styled-components/macro';
import { above, breakpoints } from "styles/responsive";
import { ReactComponent as Award } from "assets/award.svg";

const { sm } = breakpoints;

const Headline = styled.h2`
  font-size: 26px;
  line-height: 1.2;
  
  ${ above(sm) } {
    font-size: 32px;
  }
`;

const SubHeadline = styled.p`
  font-size: 16px;
  line-height: 1.2;
  margin-bottom: 50px;
  
  ${ above(sm) } {
    font-size: 20px;
    margin-bottom: 100px;
  }
`;

const AwardContainer = styled.div`
  margin-top: 50px;
`;

const AwardIcon = styled(Award)`
  width: 45px;
  height: 47px;
`;

const AwardText = styled.p`
  font-size: 20px;
`;

export { Headline, SubHeadline, AwardContainer, AwardIcon, AwardText };