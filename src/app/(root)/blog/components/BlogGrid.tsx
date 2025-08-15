import Image from "next/image";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../../../../components/ui/breadcrumb";
import SkeletonBlogCard from "../../../../components/Blog/SkeletonBlogCard";
import dynamic from "next/dynamic";
import BlogCard from "@/components/Blog/BlogCard";

// const BlogCard = dynamic(() => import('../../../../components/Blog/BlogCard'), {
//   ssr: false,
//   loading: () => <SkeletonBlogCard/>
// });

const BlogGrid = () => {
  return (
    <>
      <div className="">
        <div>
          {/* <!-- text - start --> */}
          <div className="container p-2 md:p-[2rem] mx-auto">
            <div className="flex flex-col items-center justify-center md:flex-row md:justify-between w-full gap-2 py-2">
              <h2 className="text-2xl font-bold">Blog</h2>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/components" className="text-black">
                      All Catagorys
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            {/* <!-- text - end --> */}
            <div className="grid gap-2 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 pt-6">
              <BlogCard img="/images/photo-1593508512255-86ab42a8e620.avif" />
              <BlogCard img="/images/photo-1593508512255-86ab42a8e620.avif" />
              <BlogCard img="/images/photo-1593508512255-86ab42a8e620.avif" />
              <BlogCard img="/images/photo-1593508512255-86ab42a8e620.avif" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogGrid;
