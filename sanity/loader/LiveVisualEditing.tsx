'use client';

import { useLiveMode } from '@sanity/react-loader';
import { VisualEditing } from 'next-sanity';

import { client } from '@/sanity/lib/client';

const stegaClient = client.withConfig({ stega: true });

const LiveVisualEditing = () => {
  useLiveMode({ client: stegaClient });

  return <VisualEditing />;
};

export default LiveVisualEditing;
