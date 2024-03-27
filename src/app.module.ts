import { Module, HttpModule } from '@nestjs/common';
import { MainController } from './controller/MainController';
import { MainService } from "./service/MainService";
import {MainValidation} from "./validation/MainValidation";

const CONTROLLERS = [MainController];
const SERVICES = [MainService];
const VALIDATIONS = [MainValidation];
@Module({
  imports: [
    HttpModule
  ],
  controllers: [
    ...CONTROLLERS
  ],
  providers: [
    ...SERVICES,
    ...VALIDATIONS
  ]
})
export class AppModule {}
