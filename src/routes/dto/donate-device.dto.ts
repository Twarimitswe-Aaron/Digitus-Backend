import { IsString, IsNotEmpty, IsOptional,IsInt,IsEmail } from 'class-validator';

export class DonateDeviceDto {
  @IsString()
  @IsNotEmpty()
  FullName: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
    email: string;

  @IsString()
  @IsNotEmpty()
  deviceType: string;

  @IsInt()
    @IsNotEmpty()
  description?: string;
}
