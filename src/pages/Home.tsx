import React from 'react';
import { Hero } from '../components/home/Hero';
import { About } from '../components/home/About';
import { Features } from '../components/home/Features';
import { Benefits } from '../components/home/Benefits';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Benefits />
    </>
  );
};