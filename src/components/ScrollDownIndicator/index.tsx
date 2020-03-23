import React from 'react';
import { Button, Icon } from "./styles";

const ScrollDownIndicator: React.FunctionComponent = (props) => {
  return (
    <Button>
      { props.children }
      <Icon>
        <span></span>
        <span></span>
        <span></span>
      </Icon>
    </Button>
  );
};

export default ScrollDownIndicator;
