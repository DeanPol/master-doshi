import React from 'react';
import { prisma } from '@/lib/prisma';
import InteractiveSection from './components/InteractiveSection';

export default async function Home() {
  let verbs = await prisma.verb.findMany();
  return (
    <div>
      <InteractiveSection />
      {verbs.map(verb => (
        <span>{verb.english}</span>
      ))}
    </div>
  );
}
