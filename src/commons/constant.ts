import { Key } from "../enums/Enums";

function genKeyPathMapping(){
  const keyPathMapping = new Map<Key, string[]>();
  keyPathMapping.set(Key.TEST, ['cmd.exe', '/c', 'cd D:\\file\\doc\\fwd && aa10.bat']);
  keyPathMapping.set(Key.WEB6, ['cmd.exe',  '/c', 'D: && cd D:\\temp_deploy && web6.bat']);
  keyPathMapping.set(Key.API6, ['cmd.exe',  '/c', 'D: && cd D:\\temp_deploy && api6.bat']);
  keyPathMapping.set(Key.WEB9, ['cmd.exe',  '/c', 'D: && cd D:\\temp_deploy && web9.bat']);
  keyPathMapping.set(Key.API9, ['cmd.exe',  '/c', 'D: && cd D:\\temp_deploy && api9.bat']);
  keyPathMapping.set(Key.WEB10, ['cmd.exe',  '/c', 'D: && cd D:\\temp_deploy && web10.bat']);
  keyPathMapping.set(Key.API10, ['cmd.exe',  '/c', 'D: && cd D:\\temp_deploy && api10.bat']);
  keyPathMapping.set(Key.esWEB41, ['cmd.exe',  '/c', 'D: && cd D:\\temp_deploy && es-web41.bat']);
  keyPathMapping.set(Key.esAPI41, ['cmd.exe',  '/c', 'D: && cd D:\\temp_deploy && es-api41.bat']);
  return function(key: Key): string[] {
    return keyPathMapping.get(key) || [];
  }
}

function genCache(){
  const map = new Map<string, string>();
  const timeout = new Map<string, any>();
  return {
    set(key: string, data: string){
      map.set(key, data);
      this.refresh(key);
    },
    delete(key: string){
      map.delete(key);
      const index = timeout.get(key);
      if (index) {
        clearTimeout(index);
        timeout.delete(key);
      }
    },
    refresh(key: string){
      const index = timeout.get(key);
      if (index) {
        clearTimeout(index);
      }
      const newIndex = setTimeout(() => {
        this.delete(key);
      }, 5 * 60 * 1000);
      timeout.set(key, newIndex);
    },
    get(key: string){
      this.refresh(key);
      return map.get(key);
    }
  }
}

export const getKeyPath = genKeyPathMapping();

export const cache = genCache();
