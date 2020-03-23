import React from 'react';
import { Col, Row } from "react-styled-flexboxgrid";
import { Headline, UserGraphIcon, LineGraphIcon } from "./styles";

const Info: React.FunctionComponent = (props) => {
  return (
    <>
      <Headline>Vi kan hjælpe dig med <br />digital transformation på to fronter</Headline>
      <Row center={ 'xs' } around={ 'md' }>
        <Col xs={ 12 } md={ 4 }>
          <UserGraphIcon />
          <h3>Strategisk rådgivning om digital transformation</h3>
          <p>Udnytter din virksomhed sit digitale potentiale? Hvilke forretningsmuligheder er der, og hvad betyder det på et strategisk plan?</p>
        </Col>
        <Col xs={ 12 } md={ 4 }>
          <LineGraphIcon />
          <h3>Eksekvering af digital transformation</h3>
          <p>I ved, hvad I vil, men I har brug for hjælp til at rulle strategien ud i forhold til organisationen og det digitale fundament bl.a. på Sitecore. Det handler om
            mennesker og resultater.</p>
        </Col>
      </Row>
    </>
  );
};

export default Info;
