import { Injectable } from "@nestjs/common";
import { Key } from "../enums/Enums";
import { getKeyPath } from "../commons/constant";
import { ProcessUtils } from "../utils/ProcessUtils";

@Injectable()
export class MainService{
  public start(key: Key): Promise<string> {
    const path = getKeyPath(key);
    return ProcessUtils.exec(path);
  }
}
