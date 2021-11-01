import { prisma } from "@lib/prisma";

import type { Post } from "@typings/data";

export const updatePosts = async (posts: Post[]) => {
  for (const { title, slug, description, isPublished } of posts) {
    await prisma.posts.upsert({
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
    });
  }
};
