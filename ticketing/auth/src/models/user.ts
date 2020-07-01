import mongoose, { Schema, Document } from 'mongoose'

interface IUser extends Document {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

const User = mongoose.model<IUser>('Users', userSchema)

export default User;