import { NextResponse } from 'next/server';
import connect from '@/utils/db';
import Post from '@/models/Post';
import slugify from 'slugify';

import { marked } from 'marked';
marked.use({
  mangle: false,
  headerIds: false,
});

//auth
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]/route';

export const GET = async () => {
  try {
    await connect();
    const posts = await Post.find();
    return new NextResponse(JSON.stringify(posts));
  } catch (err) {
    console.log(err);
    return new NextResponse('cannot fetch the post', { status: 500 });
  }
};

export const POST = async (req) => {
  const session = await getServerSession(authOptions);

  if (!session || session.user.email != process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
    return new NextResponse('Not Authorized!!', { status: 401 });
  }

  const body = await req.json();
  const slug = slugify(body.title, {
    replacement: '-', // replace spaces with replacement character, defaults to `-`
    remove: undefined, // remove characters that match regex, defaults to `undefined`
    lower: false, // convert to lower case, defaults to `false`
    strict: false, // strip special characters except replacement, defaults to `false`
    locale: 'vi', // language code of the locale to use
    trim: true, // trim leading and trailing replacement chars, defaults to `true`
  });

  // Parse markdown
  const parsedHtml = marked.parse(body.markdown);

  const newPost = new Post({
    title: body.title,
    desc: body.desc,
    markdown: body.markdown,
    parsedHtml: parsedHtml,
    slug: slug,
    keywords: body.keywords,
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
