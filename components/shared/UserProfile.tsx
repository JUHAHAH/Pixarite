import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

const UserProfile = () => {
  return (
    <div className="">
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
