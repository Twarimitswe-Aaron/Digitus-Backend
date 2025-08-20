export declare class UsersService {
    Login(email: string, password: string): Promise<{
        id: string;
        email: string;
        role: import("../../generated/prisma").$Enums.Role;
    }>;
    createTrainer(email: string, password: string, role: string): Promise<void>;
}
