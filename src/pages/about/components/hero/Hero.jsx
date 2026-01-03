import { useMemo, useRef } from 'react';

import Image from 'next/image';
import clsx from 'clsx';
import { gsap } from 'gsap';
import styles from '@src/pages/about/components/hero/styles/hero.module.scss';
import useIsMobile from '@src/hooks/useIsMobile';
import { useIsomorphicLayoutEffect } from '@src/hooks/useIsomorphicLayoutEffect';
import { useWindowSize } from '@darkroom.engineering/hamo';

function Hero() {
  const rootRef = useRef();
  const windowSize = useWindowSize();
  const isMobile = useIsMobile();
  const heroImageRef = useRef();

  const mainScroller = useMemo(() => {
    if (typeof window !== 'undefined') {
      return document.querySelector('main');
    }
    return null;
  }, []);

  const setupHeroAnimation = () => {
    const ctx = gsap.context(() => {
      gsap.set(heroImageRef.current, { yPercent: !isMobile ? -10 : 0 });
      gsap.to(heroImageRef.current, {
        yPercent: 20,
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: `bottom+=${windowSize.height * 0.35}`,
          scrub: true,
          scroller: mainScroller,
          invalidateOnRefresh: true,
        },
      });
    });

    return ctx;
  };

  useIsomorphicLayoutEffect(() => {
    const ctx = setupHeroAnimation();
    return () => ctx.kill();
  }, [windowSize.height, isMobile]);

  return (
    <section ref={rootRef} className={clsx(styles.root, 'layout-block-inner')}>
      <header className={styles.titleContainer}>
        <h2 className={clsx(styles.title, 'h2')}>Building scalable full-stack applications with AI-powered features.</h2>
      </header>
      <div className={styles.wrapper}>
        <div ref={heroImageRef} className={styles.imageContainer}>
          <Image priority quality={100} src="/giats/back.webp" sizes="100%" fill alt="Evangelos Giatsidis Back" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
