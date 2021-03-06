import React from 'react';
import { Button, Icon } from "./styles";

const ScrollDownIndicator: React.FunctionComponent = (props) => {
  return (
    <Button href={'#offer'}>
      { props.children }
      <Icon>
        <span/>
        <span/>
        <span/>
      </Icon>
    </Button>
  );
};

export default ScrollDownIndicator;
