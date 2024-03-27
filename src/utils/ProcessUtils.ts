import {spawn} from 'child_process';
const iconv = require("iconv-lite");

type Callback = (param: string) => void;
export class ProcessUtils {
  public static exec(commands: string[], callback: Callback): void {
    const bat = spawn(commands[0], commands.slice(1));
    // 监听子进程的输出
    bat.stdout.on('data', (data) => {
      const dataStr = iconv.decode(data, 'gbk')
      callback(dataStr);
      bat.stdin.write('\r\n');
    });

    bat.stderr.on('data', (data) => {
      const dataStr = iconv.decode(data, 'gbk')
      callback(dataStr);
    });
  }
}
