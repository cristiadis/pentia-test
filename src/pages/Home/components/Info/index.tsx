import React from 'react';
import { Row } from "react-styled-flexboxgrid";
import { Headline, UserGraphIcon, LineGraphIcon, StyledCol, Description } from "./styles";

const Info: React.FunctionComponent = (props) => {
  return (
    <>
      <Headline>Vi kan hjælpe dig med <br />digital transformation på to fronter</Headline>
      <Row center={ 'xs' } around={ 'sm' }>
        <StyledCol xs={ 12 } sm={5} md={ 4 }>
          <UserGraphIcon />
          <h3>Strategisk rådgivning om digital transformation</h3>
          <Description>Udnytter din virksomhed sit digitale potentiale? Hvilke forretningsmuligheder er der, og hvad betyder det på et strategisk plan?</Description>
        </StyledCol>
        <StyledCol xs={ 12 } sm={5} md={ 4 }>
          <LineGraphIcon />
          <h3>Eksekvering af<br/>digital transformation</h3>
          <Description>I ved, hvad I vil, men I har brug for hjælp til at rulle strategien ud i forhold til organisationen og det digitale fundament bl.a. på Sitecore. Det handler om
            mennesker og resultater.</Description>
        </StyledCol>
      </Row>
    </>
  );
};

export default Info;
