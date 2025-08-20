import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class VolunteerDto {
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  skills: string;
}
