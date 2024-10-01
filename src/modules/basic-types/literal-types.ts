//let logType: string = 'info'
//logType = 'warn'

//let logType: 'info'
//logType = 'info'

type LogType = 'info' | 'warn' | 'error';

export function logger(type: LogType, message: string) {
  switch (type) {
    case 'info':
      console.log(`Info: ${message}`);
      break;

    case 'warn':
      console.warn(`Warn: ${message}`);
      break;

    case 'error':
      console.error(`Error: ${message}`);
      break;
  }
}

logger('warn', 'Log com alguma informação sobre o que houve!');
