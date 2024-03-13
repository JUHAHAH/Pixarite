import Image from 'next/image';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/nextjs';

const UserProfile = () => {
  return (
    <div>
      <SignedIn>
        <UserButton />
      </SignedIn>

      <SignedOut>
        <SignInButton afterSignInUrl="/" />
      </SignedOut>
    </div>
  );
};

export default UserProfile;
