import classnames from 'classnames';
import Image from 'next/legacy/image';

import {
  Footer,
  InvitationSection,
  BannerSection,
  Schedule,
  MarqueeText,
  Typography,
  LinkUnderline,
  VideoWelcome,
  CentredSections,
  Presenters,
  Radio,
  VideoAbout,
} from '@/components';
import { IconArrowNextLong, IconButtonPlayText } from '@/components/icons';
import { AnimationTextWrapper, LinkSubscribeWrapper } from '@/components/wrappers';
import aboutPicPath1 from '@/public/images/about-pic-path1-new.png';
import aboutPicPath2 from '@/public/images/about-pic-path2-new.png';
import aboutPicPath3 from '@/public/images/about-pic-path3-new.png';
import type { HomePagePayload } from '@/types/types';

import styles from './page.module.scss';

export interface HomePageProps {
  data: HomePagePayload | null;
}

export const HomePage = ({ data }: HomePageProps) => {
  // Default to an empty object to allow previews on non-existent documents
  const { showcasePresenters = [], showcaseSchedule = [], showcaseRadio = [] } = data ?? {};
  
  return (
    <AnimationTextWrapper>
      <main className={styles.main}>
        <section className={styles.welcome} id='welcome'>
          <VideoWelcome />
          <div className={styles.container}>
            <div className={styles.title_wrapper}>
              <Typography className={styles.subtitle} tag='p' variant='title'>
                это
              </Typography>
              <Typography className={styles.title} tag='h1' variant='title2'>
                РАДИО Овердрайв
              </Typography>
            </div>
            <div className={styles.description_container}>
              <div className={styles.playTgLink_wrapper}>
                <a
                  aria-label='слушать в телеграм'
                  href='https://t.me/rocknword'
                  rel='noreferrer'
                  target='_blank'
                >
                  <IconButtonPlayText className={classnames(styles.playTgLink, 'playTgLink')} />
                </a>
              </div>
              <a href='https://t.me/rocknword/12578' rel='noreferrer' target='_blank'>
                <div>
                  <div className={styles.donation_wrapper}>
                    <Typography className={styles.donation} tag='p' variant='text5'>
                      поддержать проект
                    </Typography>
                    <IconArrowNextLong />
                  </div>
                  <Typography className={styles.slogan} tag='div' variant='text6'>
                    <p>Независимое радио без рекламы,</p>
                    <p>ипотеки и средств против импотенции —</p>
                  </Typography>
                  <Typography className={styles.slogan_bold} tag='div' variant='text7'>
                    <LinkUnderline>такое возможно?</LinkUnderline>
                  </Typography>
                  <Typography className={styles.slogan_bold} tag='div' variant='text7'>
                    <LinkUnderline>Да, благодаря твоим донатам!</LinkUnderline>
                  </Typography>
                </div>
              </a>
            </div>
            <MarqueeText>мы вещаем до последнего</MarqueeText>
          </div>
        </section>
        <section className={styles.about} id='about'>
          <div className={styles.container}>
            <div className={styles.img_wrapper}>
              <div className={classnames(styles.image_wrapper_one, 'dynamic-img')}>
                <Image alt='' className={styles.img} layout='responsive' src={aboutPicPath1} />
              </div>
              <div className={classnames(styles.image_wrapper_two, 'dynamic-img')}>
                <Image alt='' className={styles.img} layout='responsive' src={aboutPicPath2} />
              </div>
              <div className={classnames(styles.image_wrapper_three, 'dynamic-img')}>
                <Image alt='' className={styles.img} layout='responsive' src={aboutPicPath3} />
              </div>
            </div>
            <div className={styles.container_text}>
              <div className={styles.title_wrapper}>
                <Typography className={styles.title} tag='h3' variant='title3'>
                ЛЮБОВЬ,
                </Typography>
                <Typography className={styles.title} tag='h3' variant='title3'>
                  СВОБОДА,
                </Typography>
                <Typography className={styles.title} tag='h3' variant='title3'>
                ДИКОСТЬ
                </Typography>
              </div>
              <div className={styles.description_wrapper}>
                <Typography className={styles.description} tag='p' variant='text'>
                  Мы базируемся на орбите свежей горячей планетёночки Земля и ставим музыку
                  в высоком стиле, покуда смерть не разлучит нас. Долой ротацию и формат скучных
                  околоистеблишментных радиостанций, где всё куплено
                  <span className='text-highlight'>, — врубайся</span> в доброкачественнейшее музло
                  всех времён и народов<span className='text-highlight'>, оверслушатель!</span>
                </Typography>
                <Typography className={styles.description} tag='p' variant='text'>
                  Радио Овердрайв основано 15 октября 2020 года редакторами независимого
                  издательства Чтиво на месте бывшей авторской страницы рок-писателя Сергея Иннера,
                  психоделически исчезнувшего после презентации его антиромана{' '}
                  <a
                    href='https://chtivo.spb.ru/book-overdrive.html'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <LinkUnderline>«Овердрайв»</LinkUnderline>
                  </a>
                  .
                </Typography>
              </div>
            </div>
          </div>
        </section>
        <VideoAbout />
        <CentredSections.Team className={styles.presenters} id='presenters'>
          {/* Showcase presenters */}
          {showcasePresenters && showcasePresenters.length > 0 && (
            <Presenters.Container showcasePresenters={showcasePresenters} />
          )}
        </CentredSections.Team>
        <InvitationSection.Centred />
        <BannerSection.Ocapella />
        <BannerSection.Aliens />
        {showcaseSchedule && showcaseSchedule.length > 0 && (
          <CentredSections.Program className={styles.program} id='program'>
            <Schedule.Slider showcaseSchedule={showcaseSchedule} />
            <div className={styles.description_wrapper}>
              <Typography className={styles.description} tag='p' variant='text'>
                <span>
                  И — всю неделю <span className='text-highlight'>новые релизы</span> топовых
                  музыкантов. Не забудь подписаться на нас в Телеграм, чтобы больше ничего
                  не пропустить.
                </span>
              </Typography>
            </div>
          </CentredSections.Program>
        )}
        <div className={styles.planet}>
          <div className={styles.container}>
            <LinkSubscribeWrapper className={styles.link_subscribe} />
            <InvitationSection.Left />

            <Footer id='contacts' />
          </div>
        </div>
        {/* Showcase radio */}
        {showcaseRadio && showcaseRadio.length > 0 && (
          <div>
            <Radio radioItems={showcaseRadio} />
          </div>
        )}
      </main>
    </AnimationTextWrapper>
  );
};

export default HomePage;
