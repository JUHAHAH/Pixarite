'use client';
import axios from 'axios';

export default async function CreatePost() {
  await axios.post(process.env.ROOT_URL + '/api/posts');
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
