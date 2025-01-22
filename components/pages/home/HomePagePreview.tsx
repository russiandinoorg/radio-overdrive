'use client';

import { type QueryResponseInitial } from '@sanity/react-loader';

import { homePageQuery } from '@/sanity/lib/queries';
import { useQuery } from '@/sanity/loader/useQuery';
import type { HomePagePayload } from '@/types/types';

import HomePage from './HomePage';

type Props = {
  initial: QueryResponseInitial<HomePagePayload | null>;
};

const HomePagePreview = (props: Props) => {
  const { initial } = props;
  const { data } = useQuery<HomePagePayload | null>(homePageQuery, {}, { initial });

  if (!data) {
    return (
      <div className='text-center'>Произошла ошибка</div>
    );
  }

  return <HomePage data={data} />;
};

export default HomePagePreview;
