import { cache } from 'react';
import connect from '@/utils/db';
import Post from '@/models/Post';

export const revalidate = 86400;

export const GetPosts = cache(async (slug) => {
  connect();
  const post = await Post.findOne({ slug });
  return post;
});
