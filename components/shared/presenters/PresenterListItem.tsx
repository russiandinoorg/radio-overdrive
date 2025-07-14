import type { PortableTextBlock } from 'next-sanity';

import { Typography } from '@/components';
import { ImageBox } from '@/components/shared/customImg/ImageBox';
import { CustomPortableText } from '@/components/shared/customText/CustomPortableText';
import type { ShowcasePresenter } from '@/types/types';
import { presentersBlurData } from '@/utils/helpers';

import styles from './presenters.module.scss';

export const PresenterListItem = ({ presenter }: { presenter: ShowcasePresenter } ) => (
  <div className={styles.box}>
    <ImageBox
      alt={`Cover image from ${presenter.name}`}
      blurData={presentersBlurData}
      classesWrapper={styles.card_img}
      image={presenter.coverImage}
    />
    <div className={styles.card_info}>
      <Typography tag='p' variant='text3'>
        Голос {presenter.day}
      </Typography>
      <Typography className={styles.card_title} tag='h3' variant='title4'>
        {presenter.name}
      </Typography>
      <Typography tag='p' variant='text4'>
        {presenter.city}
      </Typography>
      <Typography className={styles.card_description} tag='div' variant='text'>
        <CustomPortableText value={presenter.bio as PortableTextBlock[]} />
      </Typography>
    </div>
  </div>
);
