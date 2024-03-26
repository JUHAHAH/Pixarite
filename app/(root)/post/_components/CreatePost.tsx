'use client';

import axios from 'axios';
import { FormEvent, useState } from 'react';

export default function CreatePost() {
  const [data, setData] = useState({
    data: {
      title: '',
      content: '',
      authorId: 'user_2dcWjOqbjTnVbf7iovUOTLCZlto',
    },
  });

  const onChangeHandler = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.event });
  };

  const onSubmitHandler = (e: any) => {
    console.log(data);
    e.preventDefault();
    axios.post(process.env.ROOT_URL + '/api/posts', { data });
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div className="flex flex-col">
          <input
            type="text"
            name="title"
            onChange={onChangeHandler}
            className="m-1 text-slate-950"
            placeholder=" 제목"
          />
          <input
            type="text"
            name="content"
            onChange={onChangeHandler}
            className="m-1 text-slate-950"
            placeholder=" 내용"
          />
          <button type="submit">입력 완료</button>
        </div>
      </form>
    </div>
  );
}
