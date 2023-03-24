import { Schema, model } from 'mongoose';

interface Conversation {
  user: String;
  target: String;
}

const conversationSchema = new Schema<Conversation>({
  user: { type: String, required: true },
  target: { type: String, required: true },
});

const conversation = model('conversations', conversationSchema);

export default conversation;