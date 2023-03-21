import { IStartup } from './interfaces/startup';
import * as express from 'express';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';



export default class StartUp implements IStartup {
  app: express;

  constructor(app: express) {
    this.app = app;
  }

  setConnections(): void {

  }

  setRouters(): void {
    this.app.use(cors());
    this.app.use(cookieParser());
  }

  startService(): void {
    this.setConnections();
    this.setRouters();

    this.app.listen(process.env.PORT || 3000, () => {
      console.log('app runing on port  :', process.env.PORT || 4000);
    });
  }

}