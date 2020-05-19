import { LogLevel } from '../log-level';


export type TransformFn = (level: LogLevel, ...args: any[]) => any[];