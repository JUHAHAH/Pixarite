import prisma from '@/lib/database/prisma';
import { useUser } from '@clerk/nextjs';

const clerkUser = useUser().user;

export async function GET() {
  const getUser = await prisma.user.findUnique({
    where: { externalId: clerkUser?.id },
  });

  return Response.json({ getUser });
}
