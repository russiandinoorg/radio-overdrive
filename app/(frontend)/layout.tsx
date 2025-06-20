import type { Viewport } from 'next';
import dynamic from 'next/dynamic';
import { draftMode } from 'next/headers';
import { Suspense } from 'react';

import { Header } from '@/components/global';

const LiveVisualEditing = dynamic(() => import('@/sanity/loader/LiveVisualEditing'));

export const generateMetadata = () => ({
  title: 'Радио Овердрайв',
  description:
    'Семь ведущих из разных городов Земли ставят музыку высокого стиля прямо с космической станции. И помни — мы вещаем до последнего.',
  keywords: ['интернет-радио', 'новая музыка', 'топовые треки', 'рок', 'инди-музыка', 'андеграунд', 'радио через интернет бесплатно', 'радио с рок музыкой частота', 'самые популярные радио', 'радио с нормальной музыкой', 'как бы слушать радио онлайн'],
  openGraph: {
    title: '«Радио Овердрайв» — Музыка без границ',
    description:
      'Откройте для себя уникальные музыкальные стили и послушайте лучшие треки с «Радио Овердрайв», вещающего прямо из космоса.',
    images: '/images/og-overdrive.png',
    site_name: 'Радио Овердрайв',
    type: 'website',
    url: 'https://www.radio-overdrive.space/',
  },
});

export const viewport: Viewport = {
  themeColor: '#000',
};

const IndexRoute = ({ children }: { children: React.ReactNode }) => (
  <>
    <div>
        <Header />
        <Suspense>{children}</Suspense>
    </div>
    {draftMode().isEnabled && <LiveVisualEditing />}
  </>
);

export default IndexRoute;
