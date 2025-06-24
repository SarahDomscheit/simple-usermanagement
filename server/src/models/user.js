import mongoose from 'mongoose';
import { model, Schema } from 'mongoose';

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'roles',
    default: '685a9cb663929e3df943cf2e',
  },
});

export default model('User', userSchema);
