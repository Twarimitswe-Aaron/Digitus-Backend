import { IsString, IsDateString, IsNotEmpty,IsEmail,IsInt, IsPhoneNumber } from 'class-validator';

export class RequestVisitDto {
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
