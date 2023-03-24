import { Schema, model } from 'mongoose';

interface User {
  name: String;
  chatId: String;
  gender: String;
}

const userSchema = new Schema<User>({
  name: { type: String, required: true },
  chatId: { type: String, required: true },
  gender: { type: String, required: true },
});

const user = model('users', userSchema);

export default user;