import { Key } from "../enums/Enums";

function genKeyPathMapping(){
  const keyPathMapping = new Map<Key, string[]>();
  keyPathMapping.set(Key.TEST, ['cmd.exe', '/c', 'cd D:\\file\\doc\\fwd && aa10.bat']);
  // AA
  keyPathMapping.set(Key.aaWEB2, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && aa-web2.bat']);
  keyPathMapping.set(Key.aaAPI2, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && aa-api2.bat']);
  keyPathMapping.set(Key.aaWEB3, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && aa-web3.bat']);
  keyPathMapping.set(Key.aaAPI3, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && aa-api3.bat']);
  keyPathMapping.set(Key.aaWEB4, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && aa-web4.bat']);
  keyPathMapping.set(Key.aaAPI4, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && aa-api4.bat']);
  keyPathMapping.set(Key.aaWEB5, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && aa-web5.bat']);
  keyPathMapping.set(Key.aaAPI5, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && aa-api5.bat']);
  keyPathMapping.set(Key.aaWEB6, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && aa-web6.bat']);
  keyPathMapping.set(Key.aaAPI6, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && aa-api6.bat']);
  keyPathMapping.set(Key.aaWEB7, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && aa-web7.bat']);
  keyPathMapping.set(Key.aaAPI7, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && aa-api7.bat']);
  keyPathMapping.set(Key.aaWEB8, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && aa-web8.bat']);
  keyPathMapping.set(Key.aaAPI8, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && aa-api8.bat']);
  keyPathMapping.set(Key.aaWEB9, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && aa-web9.bat']);
  keyPathMapping.set(Key.aaAPI9, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && aa-api9.bat']);
  keyPathMapping.set(Key.aaWEB10, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && aa-web10.bat']);
  keyPathMapping.set(Key.aaAPI10, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && aa-api10.bat']);
  keyPathMapping.set(Key.aaWEB11, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && aa-web11.bat']);
  keyPathMapping.set(Key.aaAPI11, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && aa-api11.bat']);
  keyPathMapping.set(Key.aaWEB12, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && aa-web12.bat']);
  keyPathMapping.set(Key.aaAPI12, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && aa-api12.bat']);
  keyPathMapping.set(Key.aaWEB13, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && aa-web13.bat']);
  keyPathMapping.set(Key.aaAPI13, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && aa-api13.bat']);
  keyPathMapping.set(Key.aaWEB14, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && aa-web14.bat']);
  keyPathMapping.set(Key.aaAPI14, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && aa-api14.bat']);
  // eServices
  keyPathMapping.set(Key.esWEB11, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && es-web11.bat']);
  keyPathMapping.set(Key.esAPI11, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && es-api11.bat']);

  keyPathMapping.set(Key.esWEB16, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && es-web16.bat']);
  keyPathMapping.set(Key.esAPI16, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && es-api16.bat']);

  keyPathMapping.set(Key.esWEB19, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && es-web19.bat']);
  keyPathMapping.set(Key.esAPI19, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && es-api19.bat']);

  keyPathMapping.set(Key.esWEB20, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && es-web20.bat']);
  keyPathMapping.set(Key.esAPI20, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && es-api20.bat']);

  keyPathMapping.set(Key.esWEB21, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && es-web21.bat']);
  keyPathMapping.set(Key.esAPI21, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && es-api21.bat']);

  keyPathMapping.set(Key.esWEB22, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && es-web22.bat']);
  keyPathMapping.set(Key.esAPI22, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && es-api22.bat']);

  keyPathMapping.set(Key.esWEB24, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && es-web24.bat']);
  keyPathMapping.set(Key.esAPI24, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && es-api24.bat']);

  keyPathMapping.set(Key.esWEB25, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && es-web25.bat']);
  keyPathMapping.set(Key.esAPI25, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && es-api25.bat']);

  keyPathMapping.set(Key.esWEB26, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && es-web26.bat']);
  keyPathMapping.set(Key.esAPI26, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && es-api26.bat']);

  keyPathMapping.set(Key.esWEB27, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && es-web27.bat']);
  keyPathMapping.set(Key.esAPI27, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && es-api27.bat']);

  keyPathMapping.set(Key.esWEB30, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && es-web30.bat']);
  keyPathMapping.set(Key.esAPI30, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && es-api30.bat']);
  keyPathMapping.set(Key.esWEB31, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && es-web31.bat']);
  keyPathMapping.set(Key.esAPI31, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && es-api31.bat']);
  keyPathMapping.set(Key.esWEB40, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && es-web40.bat']);
  keyPathMapping.set(Key.esAPI40, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && es-api40.bat']);
  keyPathMapping.set(Key.esWEB41, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && es-web41.bat']);
  keyPathMapping.set(Key.esAPI41, ['cmd.exe',  '/c', 'E: && cd E:\\temp_deploy && es-api41.bat']);
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
