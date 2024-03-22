import prisma from '@/lib/database/prisma';
import { auth } from '@clerk/nextjs';
import { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = auth();

  if (req.method === 'GET') {
    // GET
    const getPost = await prisma.post.findMany();

    return Response.json({ getPost });
  }
}

export { handler as GET, handler as POST };
