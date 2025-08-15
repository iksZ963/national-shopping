import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";

const SkeletonLoader = () => {
  return (
    <div className="p-6">
      <header className="text-center mb-10">
        <Skeleton className="h-10 w-3/4 mx-auto mb-2 bg-gray-300" />
        <Skeleton className="h-4 w-1/2 mx-auto bg-gray-300" />
      </header>

    <div className='w-full min-h-80 aspect-video mb-8'>
      <Skeleton className='w-full h-full bg-gray-300' />
    </div>

      <article>
        <Skeleton className="h-8 w-1/2 mb-4 bg-gray-300" />
        <Skeleton className="h-4 w-1/4 mb-6 bg-gray-300" />

        <div className="space-y-4 mb-8">
          <Skeleton className="h-4 w-full bg-gray-300" />
          <Skeleton className="h-4 w-full bg-gray-300" />
          <Skeleton className="h-4 w-3/4 bg-gray-300" />
        </div>

        <Skeleton className="h-6 w-1/3 mb-4 bg-gray-300" />
        <div className="space-y-4 mb-8">
          <Skeleton className="h-4 w-full bg-gray-300" />
          <Skeleton className="h-4 w-full bg-gray-300" />
          <Skeleton className="h-4 w-3/4 bg-gray-300" />
        </div>

        <Skeleton className="h-6 w-1/3 mb-4 bg-gray-300" />
        <div className="space-y-4 mb-8">
          <Skeleton className="h-4 w-3/4 mb-2 bg-gray-300" />
          <Skeleton className="h-4 w-3/4 mb-2 bg-gray-300" />
          <Skeleton className="h-4 w-3/4 mb-2 bg-gray-300" />
          <Skeleton className="h-4 w-3/4 mb-2 bg-gray-300" />
          <Skeleton className="h-4 w-3/4 mb-2 bg-gray-300" />
        </div>

        <Skeleton className="h-6 w-1/3 mb-4 bg-gray-300" />
        <div className="space-y-4 mb-8">
          <Skeleton className="h-4 w-3/4 mb-2 bg-gray-300" />
          <Skeleton className="h-4 w-3/4 mb-2 bg-gray-300" />
          <Skeleton className="h-4 w-3/4 mb-2 bg-gray-300" />
          <Skeleton className="h-4 w-3/4 mb-2 bg-gray-300" />
        </div>

        <Skeleton className="h-20 w-full mb-8 bg-gray-300" />

        <div className="text-center mt-10">
          <Skeleton className="h-10 w-1/3 mx-auto bg-gray-300" />
        </div>
      </article>

      <footer className="mt-10 text-center text-gray-500">
        <Skeleton className="h-4 w-1/4 mx-auto mb-2 bg-gray-300" />
        <Skeleton className="h-4 w-1/2 mx-auto bg-gray-300" />
      </footer>
    </div>
  );
};

export default SkeletonLoader;
