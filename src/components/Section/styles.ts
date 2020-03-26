import styled from 'styled-components/macro';
import { SectionProps } from './';
import { above, breakpoints } from "../../styles/responsive";
import { Grid } from "react-styled-flexboxgrid";

const { sm } = breakpoints;

const Container = styled.section<SectionProps>`
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  min-height: calc(100vh - 73px - 65px);
  width: 100%;
  padding: 20px 0 40px;
  box-sizing: border-box;
  text-align: center;
  color: ${ ({ palette, theme }) => 
    palette ? 
      theme.section[palette].color : 
      theme.section.dark.color 
  };
  background-color: ${ ({ palette, background, theme }) => 
    (background && background.color) ?
      background.color :
      palette ? 
        theme.section[palette].background : 
        theme.section.dark.background
  };
  
  &:first-of-type {
    padding-bottom: 100px;
  }
  
  ${ above(sm) } {
    padding: 50px 0 100px;
    min-height: 100vh;
  }
  
  svg {
    fill: ${ ({ palette, theme }) =>
      palette ?
        theme.section[palette].color :
        theme.section.dark.color
    };
  }
`;

const Content = styled(Grid)`
  z-index: 1;
`;

export { Container, Content };