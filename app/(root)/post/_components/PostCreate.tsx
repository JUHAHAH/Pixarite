'use client';

import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PostCreate() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });

  const onChangeHandler = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e: any) => {
    router.refresh();
    axios.post('/api/posts', formData).then((res) => {
      (document.getElementById('title') as HTMLInputElement).value = '';
      (document.getElementById('content') as HTMLInputElement).value = '';
    });
  };

  return (
    <div className="w-full">
      <div className="flex flex-col">
        <input
          type="text"
          id="title"
          onChange={onChangeHandler}
          className="m-1 text-slate-950"
          placeholder=" 제목"
        />
        <textarea
          name="content"
          id="content"
          onChange={onChangeHandler}
          className="m-1 text-slate-950"
          placeholder=" 내용"
        />
        <button onClick={onSubmitHandler}>입력</button>
      </div>
    </div>
  );
}
