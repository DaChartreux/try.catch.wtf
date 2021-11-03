import type { NextApiRequest, NextApiResponse } from "next";
import sha256 from "crypto-js/sha256";

import { prisma } from "@lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const postId = parseInt(req.query.postId.toString(), 10);
    const ip = (req.headers["x-real-ip"] as string) || "192.168.0.123";
    const ipHash = sha256(ip).toString();

    const [_, viewsCount] = await prisma.$transaction([
      prisma.views.upsert({
        where: {
          ipHash_postId: {
            ipHash,
            postId,
          },
        },
        create: {
          ipHash,
          postId,
        },
        update: {},
      }),

      prisma.views.count({
        where: {
          postId,
        },
      }),
    ]);

    return res.send({ views: viewsCount });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e });
  }
};

export default handler;
