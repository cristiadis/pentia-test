import React from 'react';
import { BodyText, Heading, SubHeading, ZeppelinIcon } from "./styles";
import ScrollDownIndicator from "components/ScrollDownIndicator";

const Intro: React.FunctionComponent = (props) => {
  return (
    <>
      <ZeppelinIcon />
      <Heading>Digital transformation</Heading>
      <SubHeading>Rådgivning. Implementering. Resultater</SubHeading>
      <BodyText>Hvordan bliver din virksomhed en digital vinder i fremtiden? <br/>Hvilke tiltag skal der til strategisk og taktisk for at dreje forretningen i den rigtige retning?
        Hvilke elementer indeholder en succesfuld digital transformation? Vi har svarene. Pentia kan hjælpe dig på hele rejsen fra strategisk rådgivning til implementering.
      </BodyText>
      <ScrollDownIndicator> Start din rejse her </ScrollDownIndicator>
    </>
  );
};

export default Intro;
