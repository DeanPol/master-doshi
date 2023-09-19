import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const verb = await prisma.verb.create({
    data: {
      japanese: 'taberu',
      english: 'to eat',
    },
  });

  console.log({ verb });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit();
  });
