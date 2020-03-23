import styled from 'styled-components/macro';
import { ReactComponent as UserGraph } from 'assets/illustration1.svg';
import { ReactComponent as LineGraph } from 'assets/illustration2.svg';

const Headline = styled.h2`
  font-size: 32px;
  line-height: 1.2;
  margin-bottom: 12%;
`;

const UserGraphIcon = styled(UserGraph)`
  height: 138px;
`;

const LineGraphIcon = styled(LineGraph)`
  height: 138px;
`;

export { Headline, UserGraphIcon, LineGraphIcon };