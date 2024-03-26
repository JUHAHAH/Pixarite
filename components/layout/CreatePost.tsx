import { currentUserInfo } from '@/lib/database/validUser';
import axios from 'axios';

export default async function CreatePost() {
  const id = currentUserInfo();
  await axios.post(process.env.ROOT_URL + '/api/posts', {
    data: {
      title: '',
      content: '',
      authorId: await id,
    },
  });
  return (
    <div>
      <div>
        <input type="text" className="m-1 text-slate-950" placeholder=" 제목" />
        <input type="text" className="m-1 text-slate-950" placeholder=" 내용" />
        <button>입력 완료</button>
      </div>
    </div>
  );
}
