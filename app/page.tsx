import React from 'react';
import { prisma } from '@/lib/prisma';
import InteractiveSection from './components/InteractiveSection';

interface Verb {
  id: string;
  japanese: string;
  english: string;
}

export default async function Home() {
  const verbs = await prisma.verb.findMany();
  return (
    <div>
      <InteractiveSection verbs={...verbs} />
    </div>
  );
}
