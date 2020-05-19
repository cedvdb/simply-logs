import { Log } from '../../src/shared/log.class';


describe('log', () => {
  const log = new Log();
  const message = 'Hello World';
  const expected = 'Hello World';
  log.transformFn = (level, str) => str + '!'; 
  it('should call ')

});