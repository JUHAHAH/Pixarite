import prisma from '@/lib/database/prisma';

export async function GET() {
  const getPost = await prisma.post.findMany();

  return Response.json({ getPost });
}

export async function POST() {
  const postPost = await prisma.post.create({
    data: {
      title: '샘플 타이틀',
      content: '샘플 내용',
    },
  });
}
