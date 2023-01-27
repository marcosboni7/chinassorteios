import { prisma } from "../../lib/prisma";

const main = async () => {
  await prisma.user.create({
    data: {
      name: 'geefi',
      email: 'geefi@gmail.com',
      password: '1235'
    }
  });
};

main();