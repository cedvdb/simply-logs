
export enum LogLevel {
  OFF = 'OFF',
  ERROR = 'ERROR',
  WARN = 'WARN',
  INFO = 'INFO',
  DEBUG = 'DEBUG',
  ALL = 'ALL'
}

// above log level without off and all
export type RuntimeLogLevel = Exclude<
  Exclude<LogLevel, LogLevel.OFF>, 
LogLevel.ALL>;

export const levelValueMap = {
  [LogLevel.OFF]: 0,
  [LogLevel.ERROR]: 1,
  [LogLevel.WARN]: 2,
  [LogLevel.INFO]: 3,
  [LogLevel.DEBUG]: 4,
  [LogLevel.ALL]: 10
}