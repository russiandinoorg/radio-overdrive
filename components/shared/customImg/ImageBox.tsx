import Image from 'next/legacy/image';
import { Fragment } from 'react';

import { urlForImage } from '@/sanity/lib/utils';

interface ImageBoxProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image?: { asset?: any };
  alt?: string;
  classesWrapper?: string;
  blurData?: string;
  height?: number;
  size?: string;
  width?: number;
}

export const ImageBox = ({
  image,
  alt = 'Cover image',
  blurData,
  classesWrapper,
  ...props
}: ImageBoxProps) => {
  const imageUrl = image && urlForImage(image)?.url();

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {imageUrl && (
        <Image
          alt={alt}
          blurDataURL={blurData}
          className={classesWrapper}
          layout='fill'
          placeholder='blur'
          src={imageUrl}
          {...props}
        />
      )}
    </>
  );
};
