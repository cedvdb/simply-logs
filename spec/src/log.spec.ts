import { Log } from '../../src/log.class';
import { LogLevel } from '../../src/log-level';


describe('log', () => {
  const log = new Log();
  const message = 'Hello World!';
  const expected = 'Hello World!';
  log.transformFn = (level, str) => str + level; 


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


});