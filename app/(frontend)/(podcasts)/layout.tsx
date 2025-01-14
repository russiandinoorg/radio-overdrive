import { ReactQueryProvider } from '@/providers';

const PodcastRoute = ({ children }: { children: React.ReactNode }) => (
  <ReactQueryProvider>{children}</ReactQueryProvider>
);

export default PodcastRoute;
