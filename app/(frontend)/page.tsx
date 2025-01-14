import dynamic from 'next/dynamic';
import { draftMode } from 'next/headers';
import Link from 'next/link';

import { HomePage } from '@/components/pages/home/HomePage';
import { studioUrl } from '@/sanity/lib/api';
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
        You don&rsquo;t have a homepage yet,{' '}
        <Link className='underline' href={`${studioUrl}/structure/home`}>
          create one now
        </Link>
        !
      </div>
    );
  }

  return <HomePage data={initial.data} />;
};

export default IndexRoute;
