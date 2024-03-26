import prisma from '@/lib/database/prisma';
import { currentUser } from '@clerk/nextjs';
import { getAuth } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';

async function handler(req: NextRequest, res: NextResponse) {
  const user = await currentUser();
  let userId = null;
  if (req.method === 'GET') {
    // GET
    const getPost = await prisma.post.findMany();

    return Response.json({ getPost });
  } else if (req.method === 'POST') {
    // POST

    if (user) userId = user.id;
    else userId = '';

    await prisma.post.create({
      data: {
        title: 'value1',
        content: 'value2',
        userId: userId,
      },
    });
    return Response.json('done');
  }
}

export { handler as GET, handler as POST };
