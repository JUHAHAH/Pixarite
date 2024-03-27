'use client';

import Spline from '@splinetool/react-spline';
import { code } from '../fonts';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className={code.className}>
        <div className="flex overflow-hidden justify-center md:justify-start">
          <div className="absolute w-80 h-96 font-extralight text-7xl p-8 md:ml-52">
            Add Custom Text Here
          </div>
          <div className="h-96 md:z-10">
            <Spline scene="https://prod.spline.design/kAX5irW-RBd6Bn7V/scene.splinecode" />
          </div>
        </div>
      </div>
      <div className="text-3xl h-[1000px]">sdfasfdfasdfasdfs</div>
    </div>
  );
}
