import styled from 'styled-components/macro';

// This is more or less the cross-browser friendly equivalent
// of object-fit: cover or background-image: cover
const CoverImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  height: auto;
  min-width: 100%;
  min-height: 100%;
`;

const Picture = styled.picture`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export { CoverImage, Picture };
