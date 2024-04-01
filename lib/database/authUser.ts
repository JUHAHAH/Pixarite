import { currentUser } from '@clerk/nextjs';

export async function clerkUser() {
  const clerkUser = await currentUser();

  return clerkUser;
}
