'use client';

import { useState } from 'react';
import type { ShowcasePresenter } from '@/types/types';

import { PresenterListItem } from './PresenterListItem';
import styles from './presenters.module.scss';

export const PresentersContainer = ({
  showcasePresenters,
}: {
  showcasePresenters: ShowcasePresenter[];
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };
  const containerClass =
    Array.isArray(showcasePresenters) && showcasePresenters.length <= 6
      ? styles.cards_container
      : styles.cards_containerBig;

  return (
    <div
      className={containerClass}
    >
      {showcasePresenters.map((presenter, index) => (
        <PresenterListItem
          key={index}
          presenter={presenter}
          isActive={index === activeIndex}
          onClick={() => handleClick(index)} />
      ))}
    </div>
  )
};
