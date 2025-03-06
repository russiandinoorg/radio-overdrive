import type { Viewport } from 'next';
import dynamic from 'next/dynamic';
import { draftMode } from 'next/headers';
import { Suspense } from 'react';

import { Header } from '@/components/global';
import { YandexMetrika } from '@/components/YandexMetrika';

const LiveVisualEditing = dynamic(() => import('@/sanity/loader/LiveVisualEditing'));

export const generateMetadata = () => ({
  title: 'радио Овердрайв',
  description:
    'Семь ведущих из разных городов Земли ставят музыку высокого стиля прямо с космической станции. И помни — мы вещаем до последнего.',
  keywords: ['интернет-радио', 'новая музыка', 'топовые треки', 'рок', 'инди-музыка', 'андеграунд'],
  openGraph: {
    images: '/images/og-overdrive.png',
  },
});

export const viewport: Viewport = {
  themeColor: '#000',
};

const IndexRoute = ({ children }: { children: React.ReactNode }) => (
  <>
  <YandexMetrika />
    <div>
      <div>
        <Header />
        <Suspense>{children}</Suspense>
      </div>
    </div>
    {draftMode().isEnabled && <LiveVisualEditing />}
  </>
);

export default IndexRoute;
