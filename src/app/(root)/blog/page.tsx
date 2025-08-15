import BlogGrid from "@/app/(root)/blog/components/BlogGrid";
import SklitanBlogGrid from "@/app/(root)/blog/components/SklitanBlogGrid";
import dynamic from "next/dynamic";
import React from "react";

// const BlogGrid = dynamic(
//   () => import("@/app/(root)/blog/components/BlogGrid"),
//   {
//     ssr: false,
//     loading: () => <SklitanBlogGrid />,
//   }
// );

const Blog = () => {
  return (
    <>
      <BlogGrid />
    </>
  );
};

export default Blog;
