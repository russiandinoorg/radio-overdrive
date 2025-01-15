'use client';

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { presentationTool } from 'sanity/presentation';
import { structureTool } from 'sanity/structure';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'

import { apiVersion, dataset, projectId, studioUrl } from '@/sanity/lib/api';
import * as resolve from '@/sanity/plugins/resolve';
import { pageStructure } from '@/sanity/plugins/settings';
import presenter from '@/sanity/schemas/documents/presenter';
import radio from '@/sanity/schemas/documents/radio';
import schedule from '@/sanity/schemas/documents/schedule';
import home from '@/sanity/schemas/singletons/home';

const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Next.js Personal Website with Sanity.io';

export default defineConfig({
  basePath: studioUrl,
  projectId: projectId || '',
  dataset: dataset || '',
  title,
  schema: {
    types: [
      // Singletons
      home,
      // Documents
      presenter,
      radio,
      schedule,
    ],
  },
  plugins: [
    structureTool({
      structure: pageStructure([home]),
    }),
    presentationTool({
      resolve,
      previewUrl: {
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    // singletonPlugin([home.name]),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    vercelDeployTool(),
  ],
});

