import { Key } from "../enums/Enums";

function genKeyPathMapping(){
  const keyPathMapping = new Map<Key, string[]>();
  keyPathMapping.set(Key.TEST, ['cmd.exe', '/c', 'cd D:\\file\\doc\\fwd && aa10.bat']);
  keyPathMapping.set(Key.API10, ['cmd.exe',  '/c', 'cd D:\\temp_deploy && api10.bat']);
  return function(key: Key): string[] {
    return keyPathMapping.get(key) || [];
  }
}


export const getKeyPath = genKeyPathMapping();
