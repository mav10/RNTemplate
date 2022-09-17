import * as Logger from 'js-logger';
import { captureLog } from '../analitics/sentry-helper';

export const setupDefaultLogger = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  Logger.useDefaults();
};

export interface IWrapperLogger {
  info(msg: string): void;
  error(msg: string, error?: Error): void;
  debug(msg: any): void;
}

class LoggerWrapper implements IWrapperLogger {
  private loggerImpl: any;

  constructor(loggerImpl: any) {
    if (loggerImpl == null) {
      throw Error('Logger is not configured');
    }
    this.loggerImpl = loggerImpl;
  }

  public info(msg: any) {
    try {
      this.loggerImpl.info(msg);
    } catch {}
  }

  public debug(msg: any) {
    this.loggerImpl.debug(msg);
  }

  public dir(msg: any) {
    this.loggerImpl.dir(msg);
  }

  public error(msg: string, error?: Error) {
    const message = `${msg}. ${error && `Details: ${JSON.stringify(error)}`}`;
    this.loggerImpl.error(message);
    captureLog(message);
  }
}

export const logger = () => {
  return new LoggerWrapper(console);
};
