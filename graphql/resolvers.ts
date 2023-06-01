import prisma from "../lib/prisma";

export const resolvers = {
  Query: {
    links: async () => {
      return await prisma.link.findMany();
    },
  },
};
