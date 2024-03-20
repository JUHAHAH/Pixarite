import { rootUrl } from '@/constants';
import axios from 'axios';
import { Key } from 'react';

export default async function Post() {
  const { data } = await axios.get(rootUrl + '/api/posts');
  console.log(data);

  return (
    <div>
      {data.getPost.map((post: { id: Key; title: string; content: any }) => {
        return (
          <div key={post.id} className="m-5">
            <p key={post.id}>제목: {post.title}</p>
            <p key={post.id}>내용: {post.content}</p>
          </div>
        );
      })}
    </div>
  );
}
