import CreatePost from '@/app/(root)/post/_components/CreatePost';
import PostView from '@/app/(root)/post/_components/PostView';
import { currentUserInfo } from '@/lib/database/validUser';
import axios from 'axios';

export default async function Home() {
  const id = await currentUserInfo();
  return (
    <div className="flex items-center flex-col w-full">
      <h4>POST</h4>
      <PostView />
      <CreatePost />
    </div>
  );
}
