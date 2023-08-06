import { NextResponse } from 'next/server';
import Note from '@/models/Note';
export const DELETE = async (req, { params }) => {
  const { id } = params;
  try {
    await Note.findByIdAndDelete(id);
    console.log('deleted!!');
    return new NextResponse('deleted successfully', { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse('cannot delete post', { status: 500 });
  }
};
