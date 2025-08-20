import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {

    async Login(email:string,password:string){
        const prisma =new PrismaClient();
        const user = await prisma.user.findUnique({
            where :{email:email}
        })
        if(!user){
            throw new UnauthorizedException("user not found");
        }
        const isPasswordValid=await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            throw new UnauthorizedException("Invalid Credentials");
        }
        return {
            id:user.id,
            email:user.email,
            role:user.role
        }
    }


    
    async createTrainer(email:string, password:string, role:string){
       

    }
}
