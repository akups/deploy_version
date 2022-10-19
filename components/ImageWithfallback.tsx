import React, { useState } from "react";
import Image from "next/image";

const ImageWithFallback = (props: {
  [x: string]: any;
  src: any;
  fallbackSrc: any;
}) => {
  const { src, fallbackSrc, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      alt="Primary Iage for Series"
      {...rest}
      src={imgSrc}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
};

export default ImageWithFallback;
