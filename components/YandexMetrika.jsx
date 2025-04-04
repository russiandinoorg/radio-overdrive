'use client';

import { YMInitializer } from 'react-yandex-metrika';

export const YandexMetrika = () => {
  return (
    <YMInitializer
      accounts={[100173811]}
      options={{
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true
      }}
      version="2"
    />
  );
};
