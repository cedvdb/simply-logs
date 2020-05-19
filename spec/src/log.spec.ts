import { Log } from '../../src/log.class';
import { LogLevel } from '../../src/log-level';


describe('log', () => {
  const log = new Log();
  const message = 'Hello World!';
  const expected = 'Hello World!';
  log.transformFn = (level, str) => [str + level]; 

  beforeEach(() => {
    log.setLogLevel(LogLevel.ALL);
  });

  it('should not call anything when a level above', () => {
    spyOnAllFunctions(console);

    log.setLogLevel(LogLevel.OFF);
    log.error(message);
    expect(console.error).not.toHaveBeenCalled();

    log.setLogLevel(LogLevel.ERROR);
    log.warn(message);
    expect(console.warn).not.toHaveBeenCalled();

    log.setLogLevel(LogLevel.WARN);
    log.info(message);
    expect(console.info).not.toHaveBeenCalled();

    log.setLogLevel(LogLevel.INFO);
    log.debug(message);
    expect(console.debug).not.toHaveBeenCalled();

    log.setLogLevel(LogLevel.DEBUG);
    log.trace(message);
    expect(console.trace).not.toHaveBeenCalled();

    log.setLogLevel(LogLevel.INFO);

    log.count(LogLevel.DEBUG);
    expect(console.count).not.toHaveBeenCalled();
    log.dir(LogLevel.DEBUG);
    expect(console.dir).not.toHaveBeenCalled();
    log.group(LogLevel.DEBUG);
    expect(console.group).not.toHaveBeenCalled();
    log.groupEnd(LogLevel.DEBUG);
    expect(console.groupEnd).not.toHaveBeenCalled();
    log.table(LogLevel.DEBUG);
    expect(console.table).not.toHaveBeenCalled();
    log.time(LogLevel.DEBUG);
    expect(console.time).not.toHaveBeenCalled();
    log.timeEnd(LogLevel.DEBUG);
    expect(console.timeEnd).not.toHaveBeenCalled();
  });

  it('should call error with the transformed string', () => {
    spyOn(console, 'error');
    log.error(message);
    expect(console.error)
      .toHaveBeenCalledWith(expected + LogLevel.ERROR);
  });

  it('should call warn with the transformed string', () => {
    spyOn(console, 'warn');
    log.warn(message);
    expect(console.warn)
      .toHaveBeenCalledWith(expected + LogLevel.WARN);
  });

  it('should call info with the transformed string', () => {
    spyOn(console, 'info');
    log.info(message);
    expect(console.info)
      .toHaveBeenCalledWith(expected + LogLevel.INFO);
  });

  it('should call debug with the transformed string', () => {
    spyOn(console, 'debug');
    log.debug(message);
    expect(console.debug)
      .toHaveBeenCalledWith(expected + LogLevel.DEBUG);
  });

  it('should call trace with the transformed string', () => {
    spyOn(console, 'trace');
    log.trace(message);
    expect(console.trace)
      .toHaveBeenCalledWith(expected + LogLevel.TRACE);
  });


});