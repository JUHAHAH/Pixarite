import PostCreate from './_components/PostCreate';
import PostView from './_components/PostView';

export default function Home() {
  return (
    <div className="flex items-center flex-col w-full">
      <h4>POST</h4>
      <PostView />
      <PostCreate />
    </div>
  );
}
