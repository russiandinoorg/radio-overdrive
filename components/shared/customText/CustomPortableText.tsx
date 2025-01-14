/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-shadow */
import { PortableText, type PortableTextBlock, type PortableTextComponents } from 'next-sanity';
import type { Image } from 'sanity';

import { ImageBox } from '@/components/shared/customImg/ImageBox';
import { TimelineSection } from '@/components/shared/customText/TimelineSection';

export const CustomPortableText = ({
  paragraphClasses,
  value,
}: {
  paragraphClasses?: string;
  value: PortableTextBlock[];
}) => {
  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => <p className={paragraphClasses}>{children}</p>,
    },
    marks: {
      link: ({ children, value }) => (
        <a href={value?.href} rel='noreferrer noopener'>
          {children}
        </a>
      ),
    },
    types: {
      image: ({ value }: { value: Image & { alt?: string; caption?: string } }) => (
        <div>
          <ImageBox alt={value.alt} image={value} />
          {value?.caption && <div>{value.caption}</div>}
        </div>
      ),
      timeline: ({ value }) => {
        const { items } = value || {};
        return <TimelineSection timelines={items} />;
      },
    },
  };

  return <PortableText components={components} value={value} />;
};
