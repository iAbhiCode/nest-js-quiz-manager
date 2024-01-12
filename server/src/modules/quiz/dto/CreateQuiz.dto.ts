import { IsNotEmpty, Length, isNotEmpty } from 'class-validator';

export class createQuizDto {
  @IsNotEmpty({ message: 'The quiz should have a title' })
  @Length(3, 255)
  title: string;

  // @isNotEmpty({})

  @Length(3)
  description: string;
}
