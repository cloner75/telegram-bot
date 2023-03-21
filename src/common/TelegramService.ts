
const TOKEN = process.env.TELEGRAM_TOKEN || '6219919482:AAGwW4pEDxEVXBEhSCkNbVkrp6xtsQWP8nQ';
import * as TelegramBot from 'node-telegram-bot-api';
import * as request from 'request';
console.log('bot');


class TelegramService {
  token: any;
  bot: any;
  constructor(token) {
    this.token = token;
    this.bot = new TelegramBot(this.token, {
      polling: true
    });
  }


  startBot() {
    console.log('start bot => ', this.bot);

    // this.bot.onText(/\/photo/, function onPhotoText(msg) {
    //   const photo = `${__dirname}/../test/data/photo.gif`;
    //   this.bot.sendPhoto(msg.chat.id, photo, {
    //     caption: "I'm a bot!"
    //   });
    // });


    // this.bot.onText(/\/audio/, function onAudioText(msg) {
    //   const url = 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Example.ogg';
    //   const audio = request(url);
    //   this.bot.sendAudio(msg.chat.id, audio);
    // });


    // this.bot.onText(/\/love/, function onLoveText(msg) {
    //   const opts = {
    //     reply_to_message_id: msg.message_id,
    //     reply_markup: JSON.stringify({
    //       keyboard: [
    //         ['Yes, you are the bot of my life ❤'],
    //         ['No, sorry there is another one...']
    //       ]
    //     })
    //   };
    //   this.bot.sendMessage(msg.chat.id, 'Do you love me?', opts);
    // });


    // this.bot.onText(/\/echo (.+)/, function onEchoText(msg, match) {
    //   const resp = match[1];
    //   this.bot.sendMessage(msg.chat.id, resp);
    // });


    // Matches /editable
    // this.bot.onText(/\/editable/, function onEditableText(msg) {
    //   const opts = {
    //     reply_markup: {
    //       inline_keyboard: [
    //         [
    //           {
    //             text: 'Edit Text',
    //             // we shall check for this value when we listen
    //             // for "callback_query"
    //             callback_data: 'edit'
    //           }
    //         ]
    //       ]
    //     }
    //   };
    //   this.bot.sendMessage(msg.from.id, 'Original Text', opts);
    // });


    // Handle callback queries
    // this.bot.on('callback_query', function onCallbackQuery(callbackQuery) {
    //   const action = callbackQuery.data;
    //   const msg = callbackQuery.message;
    //   const opts = {
    //     chat_id: msg.chat.id,
    //     message_id: msg.message_id,
    //   };
    //   let text;

    //   if (action === 'edit') {
    //     text = 'Edited Text';
    //   }

    //   this.bot.editMessageText(text, opts);
    // });

    this.bot.on('message', (msg) => {
      console.log('on message => ', msg);
      const chatId = msg.chat.id;

      // send a message to the chat acknowledging receipt of their message
      this.bot.sendMessage(chatId, 'Received your message');
    });
  }
}


export default TelegramService;