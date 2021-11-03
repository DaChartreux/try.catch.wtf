import type { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "@lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const slug = req.query.slug.toString();
    const post = await prisma.posts.findUnique({
      where: {
        slug,
      },
    });

    if (post === null) {
      return res.status(404).send("post not found");
    }

    const views = await prisma.views.count({
      where: {
        postId: post.id,
      },
    });

    res.send({ ...post, views });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e });
  }
};

export default handler;
