'use client';

import { useUser } from '@clerk/nextjs';

export default function CreatePost() {
  const { user } = useUser();

  const post = {
    data: {
      title: '',
      content: '',
      userId: '',
    },
  };

  post.data.title = 'dsdsdsdsdsds';
  post.data.content = 'asdadasdsdadadassdadadsdasdsadadas';
  post.data.userId = '';

  console.log(post);

  // await axios.post(process.env.ROOT_URL + '/api/posts', post);

  return (
    <div>
      <div>{user?.primaryEmailAddress?.emailAddress}</div>

      <div>
        <form action="" className="flex flex-col font-bold">
          <input
            type="text"
            className="m-1 text-slate-950"
            placeholder="제목"
          />
          <input
            type="text"
            className="m-1 text-slate-950"
            placeholder="내용"
          />
          <button>입력 완료</button>
        </form>
      </div>
    </div>
  );
}
