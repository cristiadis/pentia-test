import { Keyframes, keyframes } from 'styled-components';

export const pulse: Keyframes = keyframes`
  0% {
    transform: scale(1)
  }
  20% {
    transform: scale(2)
  }
  40% {
    transform: scale(1)
  }
`;