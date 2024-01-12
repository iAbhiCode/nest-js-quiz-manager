import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! This is Abhinav Pandey Coding hola!!!!';
  }
  getSomething(): string {
    return 'This is another route on something'
  }
}
