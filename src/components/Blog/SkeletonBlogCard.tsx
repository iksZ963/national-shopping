import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const SkeletonBlogCard = () => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border bg-white">
      <div className="relative block h-48 overflow-hidden bg-gray-100 md:h-64">
        <Skeleton className="h-full w-full bg-gray-300" />
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <Skeleton className="h-6 w-3/4 mb-2 bg-gray-300" />
        <Skeleton className="h-4 w-full mb-4 bg-gray-300" />
        <Skeleton className="h-4 w-full mb-4 bg-gray-300" />
        <Skeleton className="h-4 w-5/6 mb-8 bg-gray-300" />

        <div className="mt-auto flex items-end justify-between">
          <Skeleton className="h-4 w-1/4 bg-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonBlogCard;