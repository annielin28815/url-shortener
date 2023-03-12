import mongoose from 'mongoose';
import shortId from 'shortId';

const shortUrlSchema = new mongoose.Schema({
  full_url: {
    type: String,
    required: true
  },
  short_url: {
    type: String,
    required: true,
    default: shortId.generate
  },
  clicks: {
    type: Number,
    required: true,
    default: 0
  }
})

export default mongoose.model('ShortUrl', shortUrlSchema)