'use client';

import axios from 'axios';
import { FormEvent, useState } from 'react';

export default function CreatePost() {
  // await axios.post(process.env.ROOT_URL + '/api/posts', {
  //   data: { title: 'title here', content: 'content here' },
  // });

  const [formData, setFormData] = useState({ title: '', content: '' });

  const onChangeHandler = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value as string });
  };

  const onSubmitHandler = async (e: any) => {
    console.log(formData);
    axios.post('/api/posts', formData);
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
