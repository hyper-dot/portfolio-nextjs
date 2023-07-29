import Post from '@/models/Post';
import { NextResponse } from 'next/server';
import connect from '@/utils/db';
import slugify from 'slugify';

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

export const PUT = async (req, { params }) => {
  const body = await req.json();
  const { slug } = params;
  try {
    await connect();
    const post = await Post.findOne({ slug });
    const newSlug = slugify(body.title, {
      replacement: '-', // replace spaces with replacement character, defaults to `-`
      remove: undefined, // remove characters that match regex, defaults to `undefined`
      lower: false, // convert to lower case, defaults to `false`
      strict: false, // strip special characters except replacement, defaults to `false`
      locale: 'vi', // language code of the locale to use
      trim: true, // trim leading and trailing replacement chars, defaults to `true`
    });
    post.slug = newSlug;
    post.markdown = body.markdown;
    post.title = body.title;
    post.desc = body.desc;
    await post.save();
    return new NextResponse(JSON.stringify(post), { status: 201 });
  } catch (err) {
    console.log(err);
    return new NextResponse('cannot find the post', { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  const { slug } = params;
  try {
    await Post.findOneAndDelete({ slug });
    return new NextResponse('deleted successfully', { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse('cannot delete post', { status: 500 });
  }
};
