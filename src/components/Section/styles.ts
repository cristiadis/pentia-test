import styled from 'styled-components/macro';
import { SectionProps } from './';

const Container = styled.section<SectionProps>`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding: 50px 0 100px;
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
  
  svg {
    fill: ${ ({ palette, theme }) =>
      palette ?
        theme.section[palette].color :
        theme.section.dark.color
    };
  }
`;
export { Container };