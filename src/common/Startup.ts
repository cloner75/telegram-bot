import * as express from 'express';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';

import { IStartup } from './interfaces/startup';
import TelegramService from './TelegramService';


export default class StartUp implements IStartup {
  app: express;

  constructor(app: express) {
    this.app = app();
  }

  setConnections(): void {
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());

    this.app.use(cors({
      origin: '*',
    }));
    this.app.use(cookieParser());

  }

  setRouters(): void {
    this.app.post(`/bot`, (req, res) => {
      return res.send(Object.keys(req));
    });

    this.app.use((_req, res) => {
      return res.status(404).send('Not Found Route');
    });
  }

  processHandler() {
    process.on('rejectionHandled', (error) => {
      console.log('rejectionHandler => ', error);
    });

    process.on('uncaughtException', (error) => {
      console.log('uncaughtException => ', error);
    });
  }

  additionalServices() {
    const telegram = new TelegramService();
    // telegram.startWebhook()
    telegram.startGetUpdate();
  }

  startService(): void {
    this.setConnections();
    this.processHandler();
    this.setRouters();
    this.additionalServices();

    this.app.listen(process.env.PORT || 4000, () => {
      console.log('app runing on port  :', process.env.PORT || 4000);
    });
  }
}