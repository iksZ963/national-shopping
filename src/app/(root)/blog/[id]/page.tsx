/* eslint-disable @next/next/no-img-element */
import React from "react";
import DOMPurify from "dompurify";
import { Metadata, ResolvingMetadata } from "next"; // if using TypeScript
import { blogPost } from "./blog";
import { Card } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import GoBackBTN from "@/components/GoBackBTN";
import BlogViewSklitanLoader from "../BlogViewSklitanLoader";
import Link from "next/link";
import Image from "next/image";
import BlogComment from "../components/BlogComment";

// type Props = {
//   params: { id: string };
//   searchParams: { [key: string]: string | string[] | undefined };
// };

// export async function generateMetadata(
//   { params, searchParams }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   // read route params
//   const id = params.id;

// fetch data
// const postData = await fetch(`https://dummyjson.com/posts/${id}`).then(
//   (res) => res.json()
// );

// optionally access and extend (rather than replace) parent metadata
// const previousImages = (await parent).openGraph?.images || [];

interface PageProps {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { id } = await params;

  const postData = await fetch(`https://dummyjson.com/posts/${id}`).then(
    (res) => res.json()
  );


  return {
    title: postData.title,
    keywords: ["post", "food", "organic food", "frash food"],
    openGraph: {
      title: postData.title,
      description: postData.body,
      url: "https://nextjs.org",
      siteName: "Next.js",
      images: [
        {
          url: `${process.env.HOST_URL}/api/og?title=${postData.title.slice(0, 20) + "..."
            }`, // Dynamic og route
          width: 800,
          height: 600,
        },
        {
          url: `${process.env.HOST_URL}/api/og?title=${postData.title.slice(0, 20) + "..."
            }`, // Dynamic og route
          width: 1800,
          height: 1600,
          alt: "My custom alt",
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
}

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const content = blogPost;

  // const sanitizedHtml = DOMPurify.sanitize(content);
  const initialComments = [
    {
      id: 1,
      author: "John Doe",
      date: "June 24, 2024",
      content: "This is the first comment on this blog post.",
      nestedReplies: [
        {
          id: 1,
          author: "Jane Smith",
          date: "June 25, 2024",
          content: "Reply to the first comment.",
        },
        {
          id: 2,
          author: "Sam Green",
          date: "June 26, 2024",
          content: "Another reply to the first comment.",
        },
      ],
    },
    {
      id: 2,
      author: "Alice Brown",
      date: "June 27, 2024",
      content: "Second comment on this blog post.",
      nestedReplies: [],
    },
    // Add more comments as needed
  ];

  return (
    <>
      <div className="max-w-5xl p-2 md:p-[2rem] mx-auto">
        <div className="flex items-center justify-between w-full gap-2 py-2">
          <GoBackBTN />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/blog" className="text-black">
                  Blog
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem className="text-black">
                {id}
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <Card className="p-4 md:px-6 mt-6">
          <header style={{ textAlign: "center", marginBottom: "40px" }}>
            <h1 style={{ fontSize: "2.5em", color: "#4CAF50" }}>
              Welcome to FreshMart
            </h1>
            <p style={{ fontSize: "1.2em", color: "#777" }}>
              Your Neighborhood Grocery Store
            </p>
          </header>
          <div className="w-full bg-gray-300 mb-8">
            <Image
              src="/images/og-cover.png"
              alt="blog-image"
              className="object-cover aspect-video pointer-events-none transition-all"
              height={800}
              width={1000}
            />
          </div>
          <div dangerouslySetInnerHTML={{ __html: content }} />
          {/* <BlogViewSklitanLoader /> */}
          <div>
            <div style={{ marginTop: "40px", textAlign: "center" }}>
              <Link
                href="/shop"
                style={{
                  display: "inline-block",
                  padding: "10px 20px",
                  backgroundColor: "#4CAF50",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: "5px",
                }}
              >
                Visit Our Store Today
              </Link>
            </div>
            <footer
              style={{ marginTop: "40px", textAlign: "center", color: "#777" }}
            >
              <p>&copy; 2024 FreshMart. All rights reserved.</p>
              <p>
                Follow us on
                <a
                  href="https://twitter.com/freshmart"
                  style={{ color: "#4CAF50" }}
                >
                  Twitter
                </a>
                ,
                <a
                  href="https://facebook.com/freshmart"
                  style={{ color: "#4CAF50" }}
                >
                  Facebook
                </a>
                , and
                <a
                  href="https://instagram.com/freshmart"
                  style={{ color: "#4CAF50" }}
                >
                  Instagram
                </a>
                .
              </p>
            </footer>
          </div>
        </Card>
        <BlogComment initialComments={initialComments} />
      </div>
    </>
  );
};

export default page;
