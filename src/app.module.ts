import { Module } from '@nestjs/common';
import { MainController } from './controller/MainController';
import { MainService } from "./service/MainService";
import {MainValidation} from "./validation/MainValidation";

const CONTROLLERS = [MainController];
const SERVICES = [MainService];
const VALIDATIONS = [MainValidation];
@Module({
  imports: [],
  controllers: [
    ...CONTROLLERS
  ],
  providers: [
    ...SERVICES,
    ...VALIDATIONS
  ]
})
export class AppModule {}
