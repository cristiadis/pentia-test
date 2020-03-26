import React from 'react';
import { CoverImage, Picture } from "./styles";

interface HeroProps {
  imageSrc: string;
}

const HeroImage: React.FunctionComponent<HeroProps> = ({ imageSrc }) =>
  <Picture>
    <source
        srcSet={`
          ${imageSrc}?width=480&amp;format=webp 480w, 
          ${imageSrc}?width=960&amp;format=webp 960w, 
          ${imageSrc}?width=1920&amp;format=webp 1920w`
        }
        sizes="(max-width: 768px) 100vw, 100vw" type="image/webp"
    />
    <CoverImage
        src={`${imageSrc}?width=960`}
        alt="Homeoffice 2"
        srcSet={`
          ${imageSrc}?width=480 480w, 
          ${imageSrc}?width=960 960w, 
          ${imageSrc}?width=1920 1920w
        `}
        sizes="(max-width: 768px) 100vw, 100vw"
    />
  </Picture>;

export default HeroImage;