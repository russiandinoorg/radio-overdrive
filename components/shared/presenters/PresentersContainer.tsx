'use client';

import { useState } from 'react';
import type { ShowcasePresenter } from '@/types/types';

import { PresenterListItem } from './PresenterListItem';
import styles from './presenters.module.scss';

export const PresentersContainer = ({
  showcasePresenters,
}: {
  showcasePresenters: ShowcasePresenter[];
}) => (
  <div
    className={Array.isArray(showcasePresenters) && showcasePresenters.length <= 6
      ? styles.cards_container
      : styles.cards_containerBig}
  >
    {showcasePresenters.map((presenter, key) => (
      <PresenterListItem
        key={key}
        presenter={presenter} />
    ))}
  </div>
);
