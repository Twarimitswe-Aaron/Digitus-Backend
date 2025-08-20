import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) {


  }
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.Login(email, password);
    if (user) {
      return user;
    }
    return null;

  }

}
