import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    login(email: string, password: string): Promise<{
        id: string;
        email: string;
        role: import("generated/prisma").$Enums.Role;
    }>;
}
