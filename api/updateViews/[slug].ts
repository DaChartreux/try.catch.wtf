import type { NextApiRequest, NextApiResponse } from "next";
import sha256 from "crypto-js/sha256";

import { prisma } from "../../lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (process.env.NODE_ENV === "development") {
    return res.send(200);
  }

  try {
    const slug = req.query.slug.toString();
    const ip = (req.headers["x-real-ip"] as string) || "192.168.0.123";
    const ipHash = sha256(ip).toString();
    const post = await prisma.posts.findUnique({
      where: {
        slug,
      },
    });

    if (post === null) {
      return res.status(404).send("post not found");
    }

    const updatedViews = await prisma.views.upsert({
      where: {
        ipHash_postId: {
          ipHash,
          postId: post.id,
        },
      },
      create: {
        ipHash,
        postId: post.id,
      },
      update: {},
    });

    const viewsCount = await prisma.views.count({
      where: {
        postId: post.id,
      },
    });

    return res.send(viewsCount);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e });
  }
};

export default handler;
