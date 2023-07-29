import Post from '@/models/Post';
import { NextResponse } from 'next/server';
import connect from '@/utils/db';

export const GET = async (req, { params }) => {
  const { slug } = params;
  try {
    await connect();
    const post = await Post.findOne({ slug });
    return new NextResponse(JSON.stringify(post), { status: 201 });
  } catch (err) {
    console.log(err);
    return new NextResponse('cannot find the post', { status: 500 });
  }
};
