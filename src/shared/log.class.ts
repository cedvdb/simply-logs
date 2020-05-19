import { LogLevel } from './log-level.enum';
import { LogFn } from './log-fn.enum';

export class Log extends Console {

  private level = LogLevel.DEBUG;

  /** function to transform the input of each log before printing */
  transformFn = (level: LogLevel, ...args: any[]) => args;

  /**
   * Sets the log level for the logger
   * @param level LogLevel:
   * OFF: 0, ERROR: 1, WARN: 2, INFO: 3,
   * DEBUG: 4, TRACE: 5, ALL: 10
   */
  setLogLevel(level: LogLevel) {
    this.level = level;
  }

	error(message: any, ...optionsParams: any[]) {
    this.doLog(LogLevel.ERROR, LogFn.ERROR, message, optionsParams);
	}

	warn(message: any, ...optionsParams: any[]) {
    this.doLog(LogLevel.WARN, LogFn.WARN, message, optionsParams);
  }

  info(message: any, ...optionsParams: any[]) {
    this.doLog(LogLevel.INFO, LogFn.INFO, message, optionsParams);
  }
  
  debug(message: any, ...optionsParams: any[]) {
    this.doLog(LogLevel.DEBUG, LogFn.DEBUG, message, optionsParams);
  }

  /** displays a stack trace from where this function was called */
	trace(message: any, ...optionsParams: any[]) {
    this.doLog(LogLevel.TRACE, LogFn.TRACE, message, optionsParams);
	}

  /** opens a log group (browser) */
	group(...args: any[]) {
    console.groupCollapsed(...args);
  }
  
  /** closes a log group (browser) */
	groupEnd() {
    console.groupEnd();
	}

	/** displays a nicely formated table */
	table(...data: any[]) {
    console.table(...data);
	}

	/** count the number of times we go through this count */
	count(label: string) {
		if (this.level >= LogLevel.DEBUG) {
			console.count(label);
		}
  }
  
  private doLog(level: LogLevel, fnName: LogFn, ...args: any[]) {
    if (this.level < level)
      return;
    this[fnName](this.transformFn(level, ...args));
  }
}

