'use client';
import React from 'react';
import Link from 'next/link';
import { HoverEffect } from './ui/card-hover-effect';

const webinars = [
  {
    title: 'Understanding Music Theory',
    description:
      'Dive deep into the fundamentals of music theory and enhance your musical skills.',
    slug: 'understanding-music-theory',
    isFeatured: true,
  },
  {
    title: 'The Art of Songwriting',
    description:
      'Learn the craft of songwriting from experienced musicians and songwriters.',
    slug: 'the-art-of-songwriting',
    isFeatured: true,
  },
  {
    title: 'Mastering Your Instrument',
    description:
      'Advanced techniques to master your musical instrument of choice.',
    slug: 'mastering-your-instrument',
    isFeatured: true,
  },
  {
    title: 'Music Production Essentials',
    description:
      'Get started with music production with this comprehensive overview.',
    slug: 'music-production-essentials',
    isFeatured: true,
  },
  {
    title: 'Live Performance Techniques',
    description:
      'Enhance your live performance skills with expert tips and strategies.',
    slug: 'live-performance-techniques',
    isFeatured: true,
  },
  {
    title: 'Digital Music Marketing',
    description:
      'Learn how to promote your music effectively in the digital age.',
    slug: 'digital-music-marketing',
    isFeatured: true,
  },
];

const UpcomingWebinars = () => {
  return (
    <div className="py-10 bg-gray-900">
      <div className="text-center">
        <h2 className="uppercase mt-5 text-2xl font-medium text-teal-500">
          Featured Webinars
        </h2>
        <p className="py-4 text-5xl">Enhance Your Musical Journey</p>
      </div>
      <div className="max-w-7xl px-2 mx-auto my-5">
        <HoverEffect
          items={webinars.map((x) => ({
            title: x.title,
            description: x.description,
            link: '/',
          }))}
        />
      </div>
      <div className="flex items-center justify-center mt-10">
        <Link href={'/'}>
          <button className="p-2 ring-2 ring-slate-600 rounded-md hover:bg-slate-600">
            View All Webinars
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UpcomingWebinars;
