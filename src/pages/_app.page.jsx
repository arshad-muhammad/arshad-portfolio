/* eslint-disable react/jsx-props-no-spreading */

import '@src/styles/global.scss';
import '@src/styles/global.css';

import * as THREE from 'three';

import { useMemo, useRef } from 'react';

import { Analytics } from '@vercel/analytics/react';
import Background from '@src/components/canvas/background/Index';
import { Canvas } from '@react-three/fiber';
import { EffectComposer } from '@react-three/postprocessing';
import Fluid from '@src/components/canvas/fluid/Fluid';
import Layout from '@src/components/dom/Layout';
import Lenis from 'lenis';
import Loader from '@src/components/dom/Loader';
import Navbar from '@src/components/dom/navbar/Index';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Scrollbar from '@src/components/dom/Scrollbar';
import Tempus from '@darkroom.engineering/tempus';
import { View } from '@react-three/drei';
import { gsap } from 'gsap';
import styles from '@src/pages/app.module.scss';
import useFoucFix from '@src/hooks/useFoucFix';
import { useFrame } from '@darkroom.engineering/hamo';
import { useIsomorphicLayoutEffect } from '@src/hooks/useIsomorphicLayoutEffect';
import useScroll from '@src/hooks/useScroll';
import { useShallow } from 'zustand/react/shallow';
import { useStore } from '@src/store';

if (typeof window !== 'undefined') {
  gsap.defaults({ ease: 'none' });
  gsap.registerPlugin(ScrollTrigger);

  gsap.ticker.lagSmoothing(0);
  gsap.ticker.remove(gsap.updateRoot);
  Tempus?.add((time) => {
    gsap.updateRoot(time / 1000);
  }, 0);

  window.scrollTo(0, 0);
  window.history.scrollRestoration = 'manual';
  ScrollTrigger.clearScrollMemory(window.history.scrollRestoration);
}

function MyApp({ Component, pageProps, router }) {
  const [lenis, setLenis, fluidColor, isAbout] = useStore(useShallow((state) => [state.lenis, state.setLenis, state.fluidColor, state.isAbout]));

  const mainRef = useRef();
  const mainContainerRef = useRef();
  const layoutRef = useRef();

  useFoucFix();
  useScroll(() => ScrollTrigger.update());

  useIsomorphicLayoutEffect(() => {
    // eslint-disable-next-line no-shadow
    const lenis = new Lenis({
      smoothWheel: true,
      smoothTouch: true,
      syncTouch: true,
      wrapper: mainRef.current || undefined,
      content: mainContainerRef.current || undefined,
    });

    setLenis(lenis);
    lenis.stop();

    return () => {
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (lenis) {
      ScrollTrigger.refresh();
    }
  }, [lenis]);

  useFrame((time) => {
    if (lenis) {
      lenis.raf(time);
    }
  }, 0);

  const domElements = useMemo(
    () => (
      <>
        <Loader />
        <div className={styles.background}>
          <Background />
        </div>
        <Scrollbar />
        <Navbar />
        <Analytics />
      </>
    ),
    [],
  );

  const canvasElements = useMemo(
    () => (
      <Canvas
        gl={{
          pixelRatio: 0.5,
          outputColorSpace: isAbout === false ? THREE.LinearSRGBColorSpace : THREE.SRGBColorSpace,
        }}
        style={{ zIndex: 0 }}
        resize={{ debounce: { resize: 0, scroll: 0 }, polyfill: undefined }}
        className={styles.canvasContainer}
        dpr={[0.5, 1.5]}
      >
        <View.Port />
      </Canvas>
    ),
    [isAbout],
  );

  return (
    <>
      <div className={styles.root}>
        {domElements}
        <div ref={layoutRef} id="layout" className={styles.layout}>
          {canvasElements}
          <Canvas
            id="fluidCanvas"
            flat
            gl={{
              antialias: false,
              stencil: false,
              depth: false,
              pixelRatio: 0.1,
            }}
            style={{ mixBlendMode: 'difference', background: 'black' }}
            linear
            className={styles.canvasContainer}
            eventSource={mainRef.current}
            dpr={[0.1, 0.5]}
          >
            <EffectComposer>
              <Fluid fluidColor={fluidColor} mainRef={mainRef} />
            </EffectComposer>
          </Canvas>
          <main ref={mainRef} className={styles.main}>
            <div ref={mainContainerRef} id="mainContainer" className={styles.mainContainer}>
              <Layout layoutRef={layoutRef} mainRef={mainRef} router={router}>
                <Component {...pageProps} />
              </Layout>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default MyApp;
