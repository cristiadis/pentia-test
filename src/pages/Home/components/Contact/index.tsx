import React from 'react';
import { Headline, SubHeadline } from "./styles";
import Form from "components/Form";

const Contact: React.FunctionComponent = (props) => {
  return (
    <>
      <Headline>Få 10 gode råd om <br />digital transformation</Headline>
      <SubHeadline>Ja tak, jeg vil gerne høre mere om digital transformation</SubHeadline>
      <Form />
    </>
  );
};

export default Contact;