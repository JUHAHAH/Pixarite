import prisma from '@/lib/database/prisma';
import { NextRequest, NextResponse } from 'next/server';

async function handler(req: NextRequest, res: NextResponse) {
  if (req.method === 'GET') {
    // GET
    const getPost = await prisma.post.findMany();

    return Response.json({ getPost });
  } else if (req.method === 'POST') {
    // POST
    const data = await req.json();
    await prisma.post.create({
      data: {
        title: data.title,
        content: data.content,
        userId: data.userId,
      },
    });
    return Response.json('done');
  }
}

export { handler as GET, handler as POST };
