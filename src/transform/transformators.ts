import { LogLevel } from '../log-level';
import { TransformFn } from './transform.interface';


export const browserColors = {
  [LogLevel.ERROR]: 'red',
  [LogLevel.WARN]: 'gold',
  [LogLevel.INFO]: 'green',
  [LogLevel.DEBUG]: 'blue',
  [LogLevel.TRACE]: 'purple',
  // those two are only there for typescript
  [LogLevel.OFF]: 'black',
  [LogLevel.ALL]: 'black'
}

export const prettyBrowser: TransformFn = 
  (level: LogLevel, ...args: any[]) => [
    `%c[${level}] %c${args} %c[${(new Date()).toLocaleTimeString()}]`, 
    `color: ${ browserColors[level] }`, 
    'color: grey',  
    'color: #ccc'
  ];

export const nodeColors = {
  [LogLevel.ERROR]: '\x1b[31m',
  [LogLevel.WARN]: '\x1b[33m',
  [LogLevel.INFO]: '\x1b[32m',
  [LogLevel.DEBUG]: '\x1b[34m',
  [LogLevel.TRACE]: '\x1b[0;35m',
  // those two are only there for typescript
  [LogLevel.OFF]: 'black',
  [LogLevel.ALL]: 'black'
}

export const prettyNode: TransformFn = 
  (level: LogLevel, ...args: any[]) => [
    `${nodeColors[level]}[${level}] \x1b[37m${args} \x1b[90m[${(new Date()).toLocaleTimeString()}]`
  ];
