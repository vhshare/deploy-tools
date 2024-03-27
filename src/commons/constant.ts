import { Key } from "../enums/Enums";

function genKeyPathMapping(){
  const keyPathMapping = new Map<Key, string>();
  keyPathMapping.set(Key.AA10, 'D:\\file\\doc\\fwd\\aa10.bat');
  return function(key: Key): string {
    return keyPathMapping.get(key) || '';
  }
}


export const getKeyPath = genKeyPathMapping();
