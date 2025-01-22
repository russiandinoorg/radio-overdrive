import dynamic from 'next/dynamic';
import { draftMode } from 'next/headers';

import { HomePage } from '@/components/pages/home/HomePage';
import { loadHomePage } from '@/sanity/loader/loadQuery';

const HomePagePreview = dynamic(() => import('@/components/pages/home/HomePagePreview'));

const IndexRoute = async () => {
  const initial = await loadHomePage();

  if (draftMode().isEnabled) {
    return <HomePagePreview initial={initial} />;
  }

  if (!initial.data) {
    return (
      <div className='text-center'>
        Произошла ошибка
      </div>
    );
  }

  return <HomePage data={initial.data} />;
};

export default IndexRoute;
