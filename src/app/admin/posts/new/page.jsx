"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const WriteBlogPage = () => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const keywords = e.target[2].value;
    const markdown = e.target[3].value;
    // sending data
    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          markdown,
          keywords,
        }),
      });
      console.log(res);
      router.push("/admin/posts");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="p-10 w-full max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4">Write a Blog</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block font-semibold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="bg-transparent w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="keywords" className="block font-semibold mb-2">
            Description
          </label>
          <input
            type="text"
            id="keywords"
            name="keywords"
            className="bg-transparent w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block font-semibold mb-2">
            Keywords
          </label>
          <input
            type="text"
            id="description"
            className="bg-transparent w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="markdown" className="block font-semibold mb-2">
            Markdown
          </label>
          <textarea
            style={{ fontFamily: "monospace" }}
            id="markdown"
            name="markdown"
            rows={20}
            className="bg-transparent w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>
        <div className="text-green-500 mb-4"></div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default WriteBlogPage;
