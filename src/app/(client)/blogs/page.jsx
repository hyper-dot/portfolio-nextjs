import React from "react";
import Link from "next/link";
import readableDate from "@/utils/readableDate";
import Post from "@/models/Post";
import connect from "@/utils/db";

export const revalidate = 10;

export const metadata = {
  title: "Blogs || Roshan Paudel",
  description: "blogs written by roshan paudel nepal",
};

const BlogsShowcasePage = async () => {
  await connect();
  const data = await Post.find();
  return (
    <div className="px-4 md:p-10 pt-28 height-screen flex flex-wrap items-start justify-center">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-semibold mb-8">All Blogs </h1>
        <div className="flex flex-col gap-8">
          {data.map((post) => (
            <Link
              href={`blogs/${post.slug}`}
              className="card-with-shadow shadow-pop transition px-4  rounded-md "
              key={post._id}
            >
              <small className="">{readableDate(post.createdAt)}</small>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="mb-4 text-sm">{post.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsShowcasePage;
