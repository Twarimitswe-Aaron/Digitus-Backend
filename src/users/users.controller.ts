import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('login')
  async login(@Body('email') email: string, @Body('password') password: string) {
    return this.usersService.Login(email, password);
  }
}
