import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class JoinTrainingDto {
  @IsString()
  @IsNotEmpty()
  Registrant: string;

  @IsString()
  @IsNotEmpty()
  Student: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
