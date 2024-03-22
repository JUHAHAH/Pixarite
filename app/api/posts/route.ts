import prisma from '@/lib/database/prisma';
import { auth } from '@clerk/nextjs';
import { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = auth();

  if (req.method === 'GET') {
    // GET
    const getPost = await prisma.post.findMany();

    return Response.json({ getPost });
  } else if (req.method === 'POST') {
    // POST
    await prisma.post.create({
      data: {
        title: 'value1',
        content: 'value2',
        userId: userId as string,
      },
    });
    return Response.json('done');
  }
}

export { handler as GET, handler as POST };
