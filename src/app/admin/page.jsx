import Link from 'next/link';
import React from 'react';
import getAllPosts from '@/utils/post';

const page = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Link href='/admin/posts/new'>Create New Post</Link>
    </div>
  );
};

export default page;
