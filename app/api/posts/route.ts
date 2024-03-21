import prisma from '@/lib/database/prisma';

export async function GET() {
  const getPost = await prisma.post.findMany();

  return Response.json({ getPost });
}

export async function POST(post: {
  title: string;
  content: string;
  id: string;
}) {
  const postPost = await prisma.post.create({
    data: {
      title: post.title,
      content: post.content,
      userId: post.id,
    },
  });
}
