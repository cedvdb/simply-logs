import { LogLevel, RuntimeLogLevel } from '../log-level';
import { TransformFn } from './transform.interface';


export const browserColors = {
  [LogLevel.ERROR]: 'red',
  [LogLevel.WARN]: 'gold',
  [LogLevel.INFO]: 'green',
  [LogLevel.DEBUG]: 'blue',
  [LogLevel.TRACE]: 'purple',
}

export const prettyBrowser: TransformFn = 
  (level: RuntimeLogLevel, ...args: any[]) => [
    `%c[${level}] %c${args.join(' ')} %c[${(new Date()).toLocaleTimeString()}]`, 
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
}

export const prettyNode: TransformFn = 
  (level: RuntimeLogLevel, ...args: any[]) => [
    `${nodeColors[level]}[${level}] \x1b[37m${args.join(' ')} \x1b[90m[${(new Date()).toLocaleTimeString()}]\x1b[0m`
  ];
