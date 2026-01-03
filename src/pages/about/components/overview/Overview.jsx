import AppearTitle from '@src/components/animationComponents/appearTitle/Index';
import clsx from 'clsx';
import styles from '@src/pages/about/components/overview/styles/overview.module.scss';
import useIsMobile from '@src/hooks/useIsMobile';

function Overview() {
  const isMobile = useIsMobile();

  return (
    <section className={clsx(styles.root, 'layout-grid-inner')}>
      <div className={styles.title}>
        {isMobile ? (
          <AppearTitle key="mobile-queto">
            <h3 className="h3">Building software is about </h3>
            <h3 className="h3">
              solving real problems with <span className="medium">innovative</span>
            </h3>
            <h3 className="h3">
              technology and <span className="medium">creative</span>
            </h3>
            <h3 className="h3">
              <span className="medium">solutions</span>.
            </h3>
          </AppearTitle>
        ) : (
          <AppearTitle key="desktop-queto">
            <h3 className="h3">Building software is about solving real</h3>
            <h3 className="h3">
              problems with <span className="medium">innovative</span> technology
            </h3>
            <h3 className="h3">
              and <span className="medium">creative</span> <span className="medium">solutions</span>.
            </h3>
          </AppearTitle>
        )}
      </div>
      <div className={clsx(styles.text, 'p-l', styles.myStory)}>
        <AppearTitle>
          <span>Some words</span>
        </AppearTitle>
      </div>
      <div className={styles.desc}>
        {!isMobile ? (
          <AppearTitle key="desktop-overview">
            <h6 className="h6">Hey there! I&apos;m Muhammad Arshad R A, a Computer Science student</h6>
            <h6 className="h6">at K.V.G. College of Engineering, Sullia, currently in my 2nd year.</h6>
            <h6 className="h6">I&apos;m a Software Developer and AI/ML Engineer passionate about</h6>
            <h6 className="h6">building innovative full-stack applications and intelligent systems.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>With experience in React, Next.js, Node.js, and AI technologies like</h6>
            <h6 className="h6">TensorFlow and LangChain, I&apos;ve built production-ready applications</h6>
            <h6 className="h6">serving hundreds of users. I specialize in creating scalable solutions</h6>
            <h6 className="h6">that combine cutting-edge technology with practical problem-solving.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>Beyond coding, I lead Sphere Hive, the official tech innovation club</h6>
            <h6 className="h6">at KVGCE, organizing workshops and hackathons. I&apos;ve also won</h6>
            <h6 className="h6">hackathons and been recognized for my technical contributions.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>I&apos;m always excited to collaborate on innovative projects and</h6>
            <h6 className="h6">create impactful technology solutions!</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>Muhammad Arshad R A.</h6>
          </AppearTitle>
        ) : (
          <AppearTitle key="mobile-overview">
            <h6 className="h6">Hey there! I&apos;m Muhammad Arshad R A, a Computer Science </h6>
            <h6 className="h6">student at K.V.G. College of Engineering, Sullia, currently in </h6>
            <h6 className="h6">my 2nd year. I&apos;m a Software Developer and AI/ML Engineer </h6>
            <h6 className="h6">passionate about building innovative full-stack applications.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>With experience in React, Next.js, Node.js, and AI technologies,</h6>
            <h6 className="h6">I&apos;ve built production-ready applications serving hundreds of</h6>
            <h6 className="h6">users. I specialize in creating scalable solutions that combine</h6>
            <h6 className="h6">cutting-edge technology with practical problem-solving.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>Beyond coding, I lead Sphere Hive, organizing workshops and</h6>
            <h6 className="h6">hackathons. I&apos;m always excited to collaborate on innovative</h6>
            <h6 className="h6">projects and create impactful technology solutions!</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>Muhammad Arshad R A.</h6>
          </AppearTitle>
        )}
      </div>
    </section>
  );
}
export default Overview;
