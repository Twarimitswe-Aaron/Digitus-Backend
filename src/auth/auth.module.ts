import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports:[
    PassportModule,
    JwtModule.registerAsync({
      inject:[ConfigService],
      
      useFactory:(config:ConfigService)=>({
        secret:config.get("JWT_SECRET"),
        signOptions:{expiresIn:"1h"}
      }),
      global:true
    }),
    UsersModule
  ],
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy],
  exports:[AuthService]
})
export class AuthModule {}
