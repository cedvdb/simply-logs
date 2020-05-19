import { LogLevel, levelValue, RuntimeLogLevel } from './log-level';
import { TransformFn } from './transform/transform.interface';


export class Log {

  private level: number = levelValue[LogLevel.ALL];

  /** function to transform the input of each log before printing */
  transformFn: TransformFn = (level: RuntimeLogLevel, ...args: any[]) => args;

  /**
   * Sets the log level for the logger
   * @param level LogLevel: one of
   * OFF, ERROR, WARN, INFO,
   * DEBUG, TRACE, ALL
   */
  setLogLevel(level: LogLevel) {
    this.level = levelValue[level];
  }

  /** prints error log */
	error(...args: any[]) {
    if (this.level >= levelValue[LogLevel.ERROR])
      console.error(...this.transformFn(LogLevel.ERROR, ...args));
	}

  /** prints warn log */
	warn(...args: any[]) {
    if (this.level >= levelValue[LogLevel.WARN])
      console.warn(...this.transformFn(LogLevel.WARN, ...args));  
  }

  /** prints info log */
  info(...args: any[]) {
    if (this.level >= levelValue[LogLevel.INFO])
      console.info(...this.transformFn(LogLevel.INFO, ...args));   
  }

  /** prints info log, alias for Log.info */
  log(...args: any[]) {
    this.info(...args);
  }
  
  /** prints debug log */
  debug(...args: any[]) {
    if (this.level >= levelValue[LogLevel.DEBUG])
      console.debug(...this.transformFn(LogLevel.DEBUG, ...args));   
  }

  /** prints stack trace */
  trace(...args: any[]) {
    if (this.level >= levelValue[LogLevel.TRACE])
      console.trace(...this.transformFn(LogLevel.TRACE, ...args));   
  }

  /** (Browser) group logs together */
	group(level: RuntimeLogLevel, ...args: any[]) {
		if (this.level >= levelValue[level] && levelValue[level])
			console.groupCollapsed(...this.transformFn(LogLevel.TRACE, ...args));
	}

  /** (Browser) collapse group */
	groupEnd(level: RuntimeLogLevel) {
    if (this.level >= levelValue[level] && levelValue[level])
		  console.groupEnd();
	}

	/** displays a nicely formated table */
	table(level: RuntimeLogLevel, ...args: any[]) {
		if (this.level >= levelValue[level] && levelValue[level])
			console.table(...args);
	}

	/** counts the number of times we go through this count */
	count(level: RuntimeLogLevel, label?: string) {
		if (this.level >= levelValue[level] && levelValue[level])
			console.count(label);
  }
  
  /** starts timer */
  time(level: RuntimeLogLevel, label?: string) {
		if (this.level >= levelValue[level] && levelValue[level])
			console.time(label);
  }

  /** ends timer */
  timeEnd(level: RuntimeLogLevel, label?: string) {
		if (this.level >= levelValue[level])
			console.timeEnd(label);
  }

  /** (Browser) displays an interactive list of 
   * properties of the specified JavaScript object */
  dir(level: RuntimeLogLevel, ...args: any[]) {
		if (this.level >= levelValue[level])
			console.dir(...this.transformFn(LogLevel.TRACE, ...args));
  }

}

