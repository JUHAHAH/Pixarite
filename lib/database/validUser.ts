import { currentUser } from '@clerk/nextjs';
import prisma from './prisma';

export async function currentUserInfo() {
  const clerkUser = await currentUser();
  //   console.log(clerkUser);
  const externalId = clerkUser?.id as string;

  return externalId;
}
