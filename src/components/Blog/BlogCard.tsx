import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogCard {
  id?: number;
  img: string;
  title?: string;
  description?: string;
}

const BlogCard = ({img}: BlogCard) => {
  return (
    <>
      <div className="flex flex-col overflow-hidden rounded-lg border bg-white group">
        <Link
          href="/blog/1"
          className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
        >
          <Image
            src={img}
            loading="lazy"
            alt="Photo by Aiony Haust"
            className="h-full w-full object-cover object-center"
            width={280}
            height={256}
          />
        </Link>

        <div className="flex flex-1 flex-col p-4 sm:p-6">
          <h2 className="mb-2 text-lg font-semibold text-gray-800">
            <Link
              href="/blog/1"
              className="transition duration-100 hover:text-primary/50 active:text-primary"
            >
              New trends in Tech
            </Link>
          </h2>

          <p className="mb-8 text-gray-500">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text.
          </p>

          <div className="mt-auto flex items-end justify-between">
            <Link href="/blog/1" className="text-primary group-hover:underline">Read more</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
