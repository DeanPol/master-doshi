import React from 'react';
import { prisma } from '@/utils/prisma';
import InteractiveSection from './components/InteractiveSection';

export default async function Home() {
  const verbs = await prisma.verb.findMany();
  return (
    <div>
      <InteractiveSection verbs={...verbs} />
    </div>
  );
}
