'use client';

import Spline from '@splinetool/react-spline';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex w-screen flex-col">
      <div>
        <div className="flex h-96 justify-center md:justify-start">
          <div className="flex absolute p-10 w-[32rem] text-8xl">
            Add Custom Text Here
          </div>
          <Spline
            scene="https://prod.spline.design/kAX5irW-RBd6Bn7V/scene.splinecode"
            className="flex z-10"
          />
        </div>
      </div>

      <Image
        src={'/images/cat2.jpg'}
        alt="cat"
        width={200}
        height={200}
        className="flex"
      />

      <div className="flex h-96"></div>
      <div className="flex h-96"></div>
      <div className="flex h-96"></div>
      <div className="flex h-96"></div>
    </div>
  );
}
