import { RuntimeLogLevel } from '../log-level';


export type TransformFn = (level: RuntimeLogLevel, ...args: any[]) => any[];