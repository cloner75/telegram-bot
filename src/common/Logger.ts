import * as winston from 'winston';


const error = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'telegram-service' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});


const info = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'telegram-service' },
  transports: [
    new winston.transports.File({ filename: 'info.log', level: 'info' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});



// if (process.env.NDOE_ENV !== 'production') {
//   error.add(new winston.transports.Console({
//     format: winston.format.simple()
//   }));

//   info.add(new winston.transports.Console({
//     format: winston.format.simple()
//   }));
// }

export default class Logger {
  static setInfo(message) {
    info.info({
      message,
      createdAt: new Date()
    });
  }


  static setError(err) {
    error.error({
      message: err.message,
      createdAt: new Date()
    });
  }
} 