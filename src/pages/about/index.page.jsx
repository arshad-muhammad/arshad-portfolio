/* eslint-disable react/jsx-props-no-spreading */
import Hero from '@src/pages/about/components/hero/Hero';
import Overview from '@src/pages/about/components/overview/Overview';
import Services from '@src/pages/about/components/services/Services';
import Process from '@src/pages/about/components/process/Process';
import CustomHead from '@src/components/dom/CustomHead';

const seo = {
  title: 'Muhammad Arshad R A - About',
  description: 'Learn about my journey as a Software Developer and AI/ML Engineer, my technical skills, experience, and passion for building innovative solutions.',
  keywords: [
    'Muhammad Arshad',
    'About Arshad',
    'About me',
    'Software Developer Journey',
    'AI Engineer Story',
    'Full Stack Developer',
    'Computer Science Student',
    'KVG College of Engineering',
    'Technical Skills',
    'Professional Experience',
    'Developer Profile',
    'AI/ML Engineer',
  ],
};
function Page() {
  return (
    <>
      <CustomHead {...seo} />

      <Hero />
      <Overview />
      <Services />
      <Process />
    </>
  );
}

export default Page;
