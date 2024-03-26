import { currentUser } from '@clerk/nextjs';

export async function currentUserInfo() {
  const clerkUser = await currentUser();

  return clerkUser;
}
