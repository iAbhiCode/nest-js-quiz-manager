import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { QuizService } from './quiz.service';
import { createQuizDto } from './dto/CreateQuiz.dto';

@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}
  @Get('/')
  getAllQuiz() {
    return this.quizService.getAllQuiz();
  }
  @Post('/create')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  createQuiz(@Body() quizData: createQuizDto) {
    return { data: quizData };
  }
}
