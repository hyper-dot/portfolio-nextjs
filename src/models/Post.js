import mongoose from 'mongoose';

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    keywords: {
      type: String,
      required: true,
    },
    markdown: {
      type: String,
      required: true,
    },
    parsedHtml: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true },
);

//If the Post collection does not exist create a new one.
export default mongoose.models.Post || mongoose.model('Post', postSchema);
