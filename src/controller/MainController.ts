import { Controller, Get, Query } from "@nestjs/common";
import { MainService } from "../service/MainService";
import { Key } from "../enums/Enums";
import { MainValidation } from "../validation/MainValidation";
@Controller()
export class MainController {

  public constructor(private mainService: MainService, private mainValidation: MainValidation) {
  }

  @Get('/start')
  public start(@Query('key') key: Key): string {
    this.mainValidation.start(key);
    return this.mainService.start(key);
  }

  @Get('/log')
  public log(@Query('taskId') taskId: string): string{
    return this.mainService.log(taskId);
  }

}
