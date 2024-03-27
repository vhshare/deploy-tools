import {spawn} from 'child_process';
const iconv = require("iconv-lite");

export class ProcessUtils {
  public static exec(commands: string[]): Promise<string> {

    return new Promise((resolve, reject)=> {
      const bat = spawn(commands[0], commands.slice(1));
      const output: string[] = [];
      const error: string[] = [];
      // 监听子进程的输出
      bat.stdout.on('data', (data) => {
        const dataStr = iconv.decode(data, 'gbk')
        output.push(dataStr);
        bat.stdin.write('\r\n');
      });

      bat.stderr.on('data', (data) => {
        error.push(data.toString());
      });

      bat.on('close', (code) => {
        resolve([...output, ...error].join(''));
      });

      bat.on('error', (code) => {
        resolve([...output, ...error].join(''));
      });


    })
  }
}
