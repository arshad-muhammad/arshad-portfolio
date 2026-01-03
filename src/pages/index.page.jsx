/* eslint-disable react/jsx-props-no-spreading */
import Home from '@src/pages/components/home/Index';
import About from '@src/pages/components/about/Index';
import Quote from '@src/pages/components/quote/Index';
import Projects from '@src/pages/components/projects/Index';
import Clients from '@src/pages/components/clients/Index';
import CustomHead from '@src/components/dom/CustomHead';

const seo = {
  title: 'Muhammad Arshad R A - Software Developer & AI/ML Engineer Portfolio',
  description:
    'Software Developer and AI/ML Engineer from Karnataka, India. Building innovative full-stack applications with React, Next.js, Node.js, and AI technologies. Specializing in scalable web solutions and machine learning applications.',
  keywords: [
    'Muhammad Arshad',
    'Arshad R A',
    'Software Developer',
    'AI Engineer',
    'ML Engineer',
    'Full Stack Developer',
    'Portfolio',
    'Web Development',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'Machine Learning',
    'TensorFlow',
    'Python Developer',
    'JavaScript',
    'TypeScript',
    'Web Applications',
    'AI Applications',
    'Karnataka',
    'India',
    'Computer Science',
    'KVG College of Engineering',
  ],
};

function Page() {
  return (
    <>
      <CustomHead {...seo} />
      <Home />
      <About />
      <Clients />
      <Quote />
      <Projects />
    </>
  );
}

export default Page;
