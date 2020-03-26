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
      <Section
        background={{
          /* Uncomment this code to activate the Hero image
          image: 'https://pentia.dk//media/igddi3dq/homeoffice_2.jpg'
          */
        }}
      >
        <Intro />
      </Section>
      <Section
        palette={'light'}
        id={'#offer'}
      >
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
