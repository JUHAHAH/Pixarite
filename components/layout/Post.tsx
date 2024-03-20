import axios from 'axios';
import { Key } from 'react';

export default async function Post() {
  const { data } = await axios.get('http://localhost:3000/api/posts');
  console.log(data.data);

  return (
    <div>
      {data.data.map((post: { id: Key; title: string; content: any }) => {
        return (
          <div key={post.id}>
            <p key={post.id}>{post.title}</p>
            <p key={post.id}>{post.content}</p>
          </div>
        );
      })}
    </div>
  );
}
