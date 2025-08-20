import { IsString, IsDateString, IsNotEmpty,IsEmail,IsInt, IsPhoneNumber } from 'class-validator';

export class ScheduleVisitDto {
  @IsString()
  @IsNotEmpty()
  FullName: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  Province: string;

  @IsPhoneNumber()
  @IsNotEmpty()
   PhoneNumber: number;


}
