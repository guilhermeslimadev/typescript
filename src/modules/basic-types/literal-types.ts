/*let logType: string = 'info';

logType = '20';*/

//let logType: 'info';
//logType = 'info';

type LogType = 'info' | 'warn' | 'error';

export function logger(type: LogType, message: string) {
  switch (type) {
    case 'info':
      console.log(`info: ${message}`);
      break;
    case 'warn':
      console.warn(`Warn: ${message}`);
      break;
    case 'error':
      console.error(`error: ${message}`);
      break;
  }
}

logger('warn', 'Log com oque aconteceu');
