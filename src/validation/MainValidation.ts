import { Injectable } from "@nestjs/common";
import { Key } from "../enums/Enums";

@Injectable()
export class MainValidation {

  public start(key: Key){
    // 获取key里面所有的可选值
    const keys = Object.values(Key);

    // 判断key是否在可选值里面
    if(!keys.includes(key)){
      throw new Error(`Illegal operation`);
    }
  }

}
