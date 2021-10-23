import { prisma } from "@lib/prisma";
import { Post } from "@typings/data";

export const updatePosts = async (posts: Post[]) => {
  for (const post of posts) {
    await prisma.posts.upsert({
      where: {
        slug: post.slug,
      },
      update: {
        isPublished: post.isPublished,
      },
      create: {
        slug: post.slug,
        isPublished: post.isPublished,
      },
    });
  }
};
