'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

import { IconLogoOverdrive } from '@/components/icons';
import { navItemsInfo } from '@/utils/data/navItemsInfo';

import styles from './header.module.scss';
import { Burger } from './navbar/burger/Burger';
import { Nav } from './navbar/nav/Nav';

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navRef = useRef<HTMLUListElement>(null);
  const main = useRef<HTMLDivElement>(null);

  const toggleNav = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen && window.matchMedia('(max-width: 1024px)').matches) {
      document.body.classList.add('menuOpen');
    } else {
      document.body.classList.remove('menuOpen');
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  useGSAP(
    () => {
      const showAnim = gsap
        .from(main.current, {
          yPercent: -100,
          paused: true,
          duration: 0.2,
        })
        .progress(1);

      ScrollTrigger.create({
        start: '50px top',
        end: 99999,
        onUpdate: (self) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          self.direction === -1 ? showAnim.play() : showAnim.reverse();
        },
      });
    },
    { scope: main },
  );

  return (
    <header className={styles.header} id='header'>
      <div ref={main} className={styles.wrapper}>
        <div className={styles.container}>
          <Link
            aria-label='На главную'
            className={styles.logoMobile}
            href='/#welcome'
            onClick={() => {
              if (isMenuOpen) toggleNav();
            }}
          >
            <IconLogoOverdrive />
          </Link>
          <Nav ref={navRef} isMenuOpen={isMenuOpen} items={navItemsInfo} toggleNav={toggleNav} />
          <Burger isMenuOpen={isMenuOpen} toggleNav={toggleNav} />
        </div>
      </div>
    </header>
  );
};
