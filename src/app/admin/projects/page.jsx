import React from 'react';
import Link from 'next/link';

const page = () => {
  return (
    <div>
      <h2>All Projects</h2>
      <Link href='/admin/projects/new'>Add New Project</Link>
    </div>
  );
};

export default page;
