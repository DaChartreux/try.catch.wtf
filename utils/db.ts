import { prisma } from "@lib/prisma";
import { Prisma } from "@prisma/client";

import type { Post } from "@typings/data";

export const updatePosts = async (posts: Post[]) => {
  const prismaProm = [];
  for (const { title, slug, description, isPublished } of posts) {
    prismaProm.push(
      prisma.posts.upsert({
        where: {
          slug,
        },
        update: {
          isPublished,
          slug,
          description,
          title,
        },
        create: {
          slug,
          isPublished,
          description,
          title,
        },
      }),
    );
  }

  await prisma.$transaction(prismaProm);
};

export const getPost = async (slug: string) => {
  const post = await prisma.posts.findUnique({
    where: { slug },
  });

  return post;
};
