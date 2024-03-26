import axios from 'axios';
import { Key } from 'react';

export default async function Post() {
  const { data } = await axios.get(process.env.ROOT_URL + '/api/posts');

  return (
    <div>
      {data.getPost.map((post: { id: any; title: string; content: any }) => {
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
