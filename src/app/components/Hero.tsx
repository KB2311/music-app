import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section className="flex bg-slate-800 flex-col items-center justify-center min-h-screen w-full">
      <div className="text-center mx-5 md:mx-0">
        <h1 className="lg:text-7xl md:text-6xl text-4xl font-bold mt-14">
          Master the art of music
        </h1>
        <p className="max-w-lg  mx-auto mt-5">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you are a beginner or looking to refine your
          skills, join us to unlock your true potential.
        </p>
      </div>
      <Link href={'/courses'}>
        <button className="relative mt-10 inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Explore Courses
          </span>
        </button>
      </Link>
    </section>
  );
};

export default Hero;
