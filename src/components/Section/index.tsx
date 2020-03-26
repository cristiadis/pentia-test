import React from 'react';
import { Container, Content } from './styles';
import { Col, Row } from "react-styled-flexboxgrid";
import HeroImage from "../HeroImage";

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
  const { background } = props;
  return (
    <Container {...props}>
      { background && background.image &&
        <HeroImage imageSrc={background.image} />
      }
      <Content>
        <Row center={'xs'}>
          <Col xs={12} md={10} lg={10}>
            { props.children }
          </Col>
        </Row>
      </Content>
    </Container>
  );
};

export default Section;