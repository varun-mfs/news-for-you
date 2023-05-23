import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { User } from '@prisma/client';

async function main() {
  const user = await prisma.user.upsert({
    where: { email: 'newsuser@mailinator.com' },
    update: {},
    create: <User>{
      email: 'newsuser@mailinator.com',
      name: 'News User',
      password: 'pass@12345',
    },
  });
  console.log({ user });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
