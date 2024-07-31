'use client';
import React from 'react';
import CourcesData from '../data/music_courses.json';
import Link from 'next/link';
import { BackgroundGradient } from './ui/background-gradient';

interface Cources {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

const FeaturedCources = () => {
  const Data = CourcesData.courses.filter((x: Cources) => x.isFeatured);
  return (
    <div className="py-10 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center ">
          <h2 className="uppercase mt-5 text-2xl font-medium text-teal-500">
            Featured Cources
          </h2>
          <p className="py-4 text-5xl">Learn With the Best</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 mt-10 gap-6">
          {Data.map((x: Cources) => (
            <BackgroundGradient key={x.id}>
              <div className="flex flex-col p-1 pt-5 rounded-[22px]  text-center items-center justify-center bg-black">
                <h2 className="mt-2 text-2xl font-bold text-">{x.title}</h2>
                <p className="max-w-sm pt-3 text-sm text-slate-400">
                  {x.description}
                </p>
                <Link href={`/courses/${x.slug}`} className="my-5">
                  Learn More
                </Link>
              </div>
            </BackgroundGradient>
          ))}
        </div>
        <div className="flex items-center justify-center mt-10">
          <Link href={'/courses'}>
            <button className="p-2 ring-2 ring-slate-600 rounded-md hover:bg-slate-600 mt-5">
              View All Cources
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCources;
