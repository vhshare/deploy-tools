import { Key } from "../enums/Enums";

function genKeyPathMapping(){
  const keyPathMapping = new Map<Key, string>();
  keyPathMapping.set(Key.API10, 'D:\\temp_deploy\\api10.bat');
  return function(key: Key): string {
    return keyPathMapping.get(key) || '';
  }
}


export const getKeyPath = genKeyPathMapping();
