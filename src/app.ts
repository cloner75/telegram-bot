import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

import * as express from 'express';

import StartUp from './common/Startup';

const bootstrap = new StartUp(express);

bootstrap.startService();