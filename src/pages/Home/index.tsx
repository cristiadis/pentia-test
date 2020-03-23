import React, { useContext }  from 'react';
import Section from '../../components/Section';
import { ThemeContext } from 'styled-components';
import Intro from "./components/Intro";
import Info from "./components/Info";
import Contact from "./components/Contact";

const Home: React.FunctionComponent = (props) => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <Section>
        <Intro />
      </Section>
      <Section palette={'light'}>
        <Info />
      </Section>
      <Section
        background={{
          color: theme.palette.secondary
        }}
      >
        <Contact />
      </Section>
    </>
  );
};

export default Home;
