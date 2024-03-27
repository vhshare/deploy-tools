import { Injectable } from "@nestjs/common";
import { Key } from "../enums/Enums";
import { cache, getKeyPath } from "../commons/constant";
import { ProcessUtils } from "../utils/ProcessUtils";
import {v4 as uuidV4} from 'uuid'

@Injectable()
export class MainService{
  public start(key: Key): string {
    const commands = getKeyPath(key);
    const uuid = uuidV4();
    ProcessUtils.exec(commands, (data) => {
      const oldData = cache.get(uuid) || '';
      cache.set(uuid, oldData + data);
    });
    return uuid;
  }

  public log(taskId: string): string {
    return cache.get(taskId) || '';
  }
}
