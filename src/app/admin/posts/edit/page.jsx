"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import Spinner from "@/components/admin/Spinner";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");

  // Data fetching
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    keywords: "",
    markdown: "",
  });

  useEffect(() => {
    fetch(`/api/posts/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setFormData(data);
        setLoading(false);
      });
  }, []);

  if (!formData) {
    return (
      <div className="h-screen">
        <div className="h-3/4 flex justify-center items-center text-red-500 text-3xl font-bold">
          Are you out of your mind ? There is no post having that slug !!!
        </div>
      </div>
    );
  }

  if (loading) return <Spinner />;

  // Event handler for form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Form handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/posts/${slug}`, formData);
      router.back();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="col-span-3 w-full max-w-4xl">
      <h1 className="text-center font-bold text-2xl">Edit Blog Post</h1>
      <div className="p-10 mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block font-semibold mb-2">
              Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={handleChange}
              id="title"
              name="title"
              className="bg-transparent w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block font-semibold mb-2">
              Description
            </label>
            <input
              type="text"
              id="description"
              value={formData.desc}
              name="desc"
              onChange={handleChange}
              className="bg-transparent w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="keywords" className="block font-semibold mb-2">
              Keywords
            </label>
            <input
              type="text"
              value={formData.keywords}
              onChange={handleChange}
              id="keywords"
              name="keywords"
              className="bg-transparent w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="content" className="block font-semibold mb-2">
              Content
            </label>
            <textarea
              style={{ fontFamily: "monospace" }}
              id="content"
              rows={20}
              name="markdown"
              value={formData.markdown}
              onChange={handleChange}
              className="bg-transparent w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>
          <div className="text-green-500 mb-4"></div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Save Edit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
