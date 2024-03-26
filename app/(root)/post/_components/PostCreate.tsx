'use client';

import { Button } from '@/components/ui/button';
import axios from 'axios';
import { useState } from 'react';

export default function PostCreate() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });

  const onChangeHandler = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value as string });
  };

  const onSubmitHandler = async (e: any) => {
    console.log(formData);
    axios.post('/api/posts', formData);
  };

  return (
    <div className="w-full">
      <form onSubmit={onSubmitHandler}>
        <div className="flex flex-col">
          <input
            type="text"
            name="title"
            onChange={onChangeHandler}
            className="m-1 text-slate-950"
            placeholder=" 제목"
          />
          <textarea
            name="content"
            onChange={onChangeHandler}
            className="m-1 text-slate-950"
            placeholder=" 내용"
          />
          <Button>입력</Button>
        </div>
      </form>
    </div>
  );
}
