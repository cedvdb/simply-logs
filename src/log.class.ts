import { LogLevel, levelValueMap, RuntimeLogLevel } from './log-level';
import { TransformFn } from './transform/transform.interface';


export class Log {

  private level: LogLevel = LogLevel.ALL;
  private levelValue: number = levelValueMap[this.level];

  /** function to transform the input of each log before printing */
  transformFn: TransformFn = (level: RuntimeLogLevel, ...args: any[]) => args;

  constructor() {}

  /**
   * Sets the log level for the logger
   * @param level LogLevel: one of
   * OFF, ERROR, WARN, INFO,
   * DEBUG, TRACE, ALL
   */
  setLogLevel(level: LogLevel) {
    this.levelValue = levelValueMap[level];
    this.level = level;
  }

  getLogLevel(): LogLevel {
    return this.level;
  }

  /** prints error log */
	error(...args: any[]) {
    if (this.levelValue >= levelValueMap[LogLevel.ERROR])
      console.error(...this.transformFn(LogLevel.ERROR, ...args));
	}

  /** prints warn log */
	warn(...args: any[]) {
    if (this.levelValue >= levelValueMap[LogLevel.WARN])
      console.warn(...this.transformFn(LogLevel.WARN, ...args));  
  }

  /** prints info log */
  info(...args: any[]) {
    if (this.levelValue >= levelValueMap[LogLevel.INFO])
      console.info(...this.transformFn(LogLevel.INFO, ...args));   
  }

  /** like console.log with a level */
  log(level: LogLevel, ...args: any[]) {
    if (this.levelValue >= levelValueMap[level] && levelValueMap[level])
      console.log(...args);
  }
  
  /** prints debug log */
  debug(...args: any[]) {
    if (this.levelValue >= levelValueMap[LogLevel.DEBUG])
      console.debug(...this.transformFn(LogLevel.DEBUG, ...args));   
  }

  /** prints stack trace */
  trace(level: RuntimeLogLevel, ...args: any[]) {
    // && levelValue[level] for js, ts will complain with LogLevel.OFF
    if (this.levelValue >= levelValueMap[level] && levelValueMap[level])
      console.trace(...this.transformFn(level, ...args));   
  }

  /** (Browser) group logs together */
	group(level: RuntimeLogLevel, ...args: any[]) {
		if (this.levelValue >= levelValueMap[level] && levelValueMap[level])
			console.groupCollapsed(...this.transformFn(level, ...args));
	}

  /** (Browser) collapse group */
	groupEnd(level: RuntimeLogLevel) {
    if (this.levelValue >= levelValueMap[level] && levelValueMap[level])
		  console.groupEnd();
	}

	/** displays a nicely formated table */
	table(level: RuntimeLogLevel, ...args: any[]) {
		if (this.levelValue >= levelValueMap[level] && levelValueMap[level])
			console.table(...args);
	}

	/** counts the number of times we go through this count */
	count(level: RuntimeLogLevel, label?: string) {
		if (this.levelValue >= levelValueMap[level] && levelValueMap[level])
			console.count(label);
  }
  
  /** starts timer */
  time(level: RuntimeLogLevel, label?: string) {
		if (this.levelValue >= levelValueMap[level] && levelValueMap[level])
			console.time(label);
  }

  /** ends timer */
  timeEnd(level: RuntimeLogLevel, label?: string) {
		if (this.levelValue >= levelValueMap[level] && levelValueMap[level])
			console.timeEnd(label);
  }

  /** (Browser) displays an interactive list of 
   * properties of the specified JavaScript object */
  dir(level: RuntimeLogLevel, ...args: any[]) {
		if (this.levelValue >= levelValueMap[level] && levelValueMap[level])
			console.log(...this.transformFn(level), ...args);
  }

}

