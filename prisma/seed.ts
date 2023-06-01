import { PrismaClient } from "@prisma/client";
import { links } from "../data/links";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: "test@mail.com",
      role: "ADMIN",
    },
  });

  const user = await prisma.user.findFirst();

  await prisma.link.createMany({
    data: links.map((link) => ({ ...link, userIds: [user?.id || ""] })),
  });

  const createdLinks = await prisma.link.findMany();

  await prisma.user.update({
    where: {
      email: "test@mail.com",
    },
    data: { bookmarkIds: createdLinks.map((link) => link.id) },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
