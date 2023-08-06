import mongoose from 'mongoose';

const { Schema } = mongoose;

const noteSchema = new Schema(
  {
    user: {
      type: String,
      required: [true, 'Username is required !!'],
    },
    note: {
      type: String,
      required: [true, 'Note is required !!'],
    },
    email: {
      type: String,
      required: [true, 'Email is required !!'],
    },
    img: {
      type: String,
    },
  },
  { timestamps: true },
);

//If the Post collection does not exist create a new one.
export default mongoose.models.Note || mongoose.model('Note', noteSchema);
