import { NextResponse } from 'next/server';
import connect from '@/utils/db';
import Post from '@/models/Post';
import slugify from 'slugify';

export const GET = async (request) => {
  const url = new URL(request.url);
  const count = url.searchParams.get('count');

  if (count) {
    try {
      await connect();
      const posts = await Post.find().sort({ createdAt: -1 }).limit(3);
      return new NextResponse(JSON.stringify(posts));
    } catch (err) {
      console.log(err);
      return new NextResponse('cannot fetch the post', { status: 500 });
    }
  } else {
    try {
      await connect();
      const posts = await Post.find();
      return new NextResponse(JSON.stringify(posts));
    } catch (err) {
      console.log(err);
      return new NextResponse('cannot fetch the post', { status: 500 });
    }
  }
};

export const POST = async (req) => {
  const body = await req.json();
  const slug = slugify(body.title, {
    replacement: '-', // replace spaces with replacement character, defaults to `-`
    remove: undefined, // remove characters that match regex, defaults to `undefined`
    lower: false, // convert to lower case, defaults to `false`
    strict: false, // strip special characters except replacement, defaults to `false`
    locale: 'vi', // language code of the locale to use
    trim: true, // trim leading and trailing replacement chars, defaults to `true`
  });

  const newPost = new Post({
    title: body.title,
    desc: body.desc,
    markdown: body.content,
    slug: slug,
  });
  try {
    await connect();
    await newPost.save();
    return new NextResponse('post has been created', { status: 201 });
  } catch (err) {
    console.log(err);
    return new NextResponse('cannot create the post', { status: 500 });
  }
};
