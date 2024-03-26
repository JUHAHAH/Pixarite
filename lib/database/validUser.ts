import { currentUser } from '@clerk/nextjs';
import prisma from './prisma';

export async function currentUserInfo() {
  const clerkUser = await currentUser();
  const externalId = clerkUser?.id as string;

  return externalId;
}
