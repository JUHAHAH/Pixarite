import prisma from '@/lib/database/prisma';

export async function GET() {
  const data = await prisma.post.findMany();

  return Response.json({ data });
}
