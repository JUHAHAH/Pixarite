import prisma from '@/lib/database/prisma';
import { currentUser } from '@clerk/nextjs';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user = await currentUser();

  if (req.method === 'GET') {
    // Read
    const getPost = await prisma.post.findMany({
      where: {
        id: user?.id,
      },
    });
  }
  if (req.method === 'POST') {
    //Create
    const postPost = await prisma.post.create({
      data: {
        title: '',
        content: '',
        userId: user?.id,
      },
    });
  }
  if (req.method === 'PUT') {
    //Update
    res.json({ ok: true });
  }
  if (req.method === 'DELETE') {
    //Delete
    res.json({ ok: true });
  }
}
