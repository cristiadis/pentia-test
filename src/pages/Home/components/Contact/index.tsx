import React from 'react';
import { AwardContainer, AwardIcon, AwardText, Headline, SubHeadline } from "./styles";
import Form from "components/Form";

const Contact: React.FunctionComponent = (props) => {
  return (
    <>
      <Headline>Få 10 gode råd om <br />digital transformation</Headline>
      <SubHeadline>Ja tak, jeg vil gerne høre mere om digital transformation</SubHeadline>
      <Form />
      <AwardContainer>
        <AwardIcon />
        <AwardText>Pentia vinder pris for digital innovation 2017</AwardText>
      </AwardContainer>
    </>
  );
};

export default Contact;