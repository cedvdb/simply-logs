import { LogLevel, RuntimeLogLevel } from '../log-level';
import { TransformFn } from './transform.interface';


export const browserColors = {
  [LogLevel.ERROR]: 'red',
  [LogLevel.WARN]: 'gold',
  [LogLevel.INFO]: 'green',
  [LogLevel.DEBUG]: 'blue',
}

export const prettyBrowser: TransformFn = 
  (level: RuntimeLogLevel, str: string, ...args: any[]) => [
    `%c[${level}] %c${str}`, 
    `color: ${ browserColors[level] }`, 
    'color: grey',
    ...args,
  ];

export const nodeColors = {
  [LogLevel.ERROR]: '\x1b[31m',
  [LogLevel.WARN]: '\x1b[33m',
  [LogLevel.INFO]: '\x1b[32m',
  [LogLevel.DEBUG]: '\x1b[34m',
}

export const prettyNode: TransformFn = 
  (level: RuntimeLogLevel, ...args: any[]) => [
    `${nodeColors[level]}[${level}] \x1b[37m${args.join(' ')} \x1b[90m[${(new Date()).toLocaleTimeString()}]\x1b[0m`
  ];
