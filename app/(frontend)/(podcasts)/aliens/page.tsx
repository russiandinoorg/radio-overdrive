import { dehydrate } from '@tanstack/query-core';
import { HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { Footer } from '@/components';
import { fetchEpisodes } from '@/utils';

import { Aliens } from './Aliens';
import styles from './page.module.scss';

const InitialData = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['episodes'],
    queryFn: () => fetchEpisodes('./aliensRSS'),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className={styles.back}>
        <div className={styles.container}>
          <Aliens />
        </div>
      </main>
      <Footer />
    </HydrationBoundary>
  );
};

export default InitialData;
