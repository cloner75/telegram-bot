import { Schema, model } from 'mongoose';

interface Chat {
  conversationId: String;
  message: String;
}

const chatSchema = new Schema<Chat>({
  conversationId: { type: Schema.Types.ObjectId, required: true },
  message: { type: String, required: true },
});

const chat = model('chats', chatSchema);

export default chat;