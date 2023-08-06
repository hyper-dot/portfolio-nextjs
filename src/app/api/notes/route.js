import { NextResponse } from 'next/server';
import connect from '@/utils/db';
import Note from '@/models/Note';

//for auth
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]/route';

export const GET = async () => {
  try {
    await connect();
    const notes = await Note.find().sort({ createdAt: -1 });
    return new NextResponse(JSON.stringify(notes));
  } catch (err) {
    console.log(err);
    return new NextResponse('cannot fetch the notes', { status: 500 });
  }
};

export const POST = async (req) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse('Not Authorized!!', { status: 401 });
  }
  const body = await req.json();

  const newNote = new Note({
    user: body.user,
    note: body.note,
    email: body.email,
    img: body.img,
  });
  try {
    await connect();
    await newNote.save();
    return new NextResponse('note has been created', { status: 201 });
  } catch (err) {
    console.log(err);
    return new NextResponse('cannot create the note', { status: 500 });
  }
};
