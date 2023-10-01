import { prisma } from '@/utils/prisma';
import InteractiveSection from './components/InteractiveSection';

export default async function Home() {
  const verbs = await prisma.verb.findMany(); // Grab collection from our model using the Prisma API
  return (
    <div>
      <InteractiveSection verbs={...verbs} />
    </div>
  );
}
