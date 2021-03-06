

# Simple Log

A dead simple cross platform logger. 
It just does one thing: lets you set a log level and then log if it's appropriate

# Features

 - Simple
 - Can set log level to disable some outputs
 - You can transform output to suit your needs
 - Typed

# Usage

```javascript
  import { log, LogLevel } from 'simply-logs';

  // same methods as on the console:
  log.setLogLevel(LogLevel.ALL);
  log.error('hey');
  log.warn('hey');
  log.info('hey');
  log.debug('hey');
  log.trace('hey');

  // others
  log.group(LogLevel.DEBUG, 'hey');
  log.groupEnd(LogLevel.INFO);
  log.time(LogLevel.WARN, 'hey');
  log.timeEnd(LogLevel.ERROR, 'hey');
  log.table(LogLevel.TRACE, obj);

  // turn off
  log.setLogLevel(LogLevel.OFF);

```

# Transform

The log class exposes `transformFn` that you can override to transform how the output is displayed.

example:

```javascript

import { TransformFn } from 'simply-logs';

const pretty = 
  (level, ...args) => [
    `[${level}] ${args.join(' ')} [${(new Date()).toLocaleTimeString()}]`, 
  ];

log.transformFn = pretty;

log.warn('hey'); // [WARN] hey [now]
```

# Prebuilt transform 

there is two prebuilt transform which have coloring (no dependencies).

```javascript
import { log, prettyNode, prettyBrowser } from 'simply-logs';

log.transformFn = prettyBrowser;
// or log.transformFn = prettyNode;
```


Voila simple as that.