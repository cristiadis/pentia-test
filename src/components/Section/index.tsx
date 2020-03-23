import React from 'react';
import { Container } from './styles';
import { Col, Grid, Row } from "react-styled-flexboxgrid";

type Background = {
  color?: string;
  image?: string;
  video?: string;
}

export interface SectionProps {
  palette?: 'light' | 'dark';
  background?: Background;
  id?: string;
}

const Section: React.FunctionComponent<SectionProps> = (props) => {
  return (
    <Container {...props}>
      <Grid>
        <Row center={'xs'}>
          <Col xs={12} md={10} lg={10}>
            { props.children }
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default Section;