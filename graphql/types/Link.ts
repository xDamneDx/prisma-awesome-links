import { builder } from "../builder";

builder.prismaObject("Link", {
  fields: (t) => ({
    id: t.exposeID("id"),
    title: t.exposeString("title"),
    url: t.exposeString("url"),
    description: t.exposeString("description"),
    imageUrl: t.exposeString("imageUrl"),
    category: t.exposeString("category"),
    users: t.relation("users"),
  }),
});

// 1. Defines a query type called links.
builder.queryField("links", (t) =>
  // 2. Defines the field that will resolve to the generated Prisma Client types.
  t.prismaField({
    // 3. Specifies the field that Pothos will use to resolve the field. In this
    // case, it resolves to an array of the Link type
    type: ["Link"],
    // 4. Defines the logic for the query.
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.link.findMany({ ...query }),
  })
);
