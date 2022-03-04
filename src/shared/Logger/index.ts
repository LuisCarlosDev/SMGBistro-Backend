import { yellow, magenta, red, gray, green } from 'colors';
import { ILogger } from './ILogger';


export class Logger implements ILogger {
  public info(message: string): void {
    console.log(`${green('[INFO]')} ${this.time} ${message}`)
  }

  public error(message: string): void {
    console.log(`${red('[ERROR]')} ${this.time} ${message}`)
  }

  public debug(message: string): void {
    console.log(`${magenta('[DEBUG]')} ${this.time} ${message}`)
  }

  public warn(message: string): void {
    console.log(`${yellow('[WARN]')} ${this.time} ${message}`)
  }

  get time() {
    return gray(`${new Date().toLocaleDateString()}`);
  }
}
