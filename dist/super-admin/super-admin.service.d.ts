import { CreateSuperAdminDto } from './dto/create-super-admin.dto';
import { UpdateSuperAdminDto } from './dto/update-super-admin.dto';
export declare class SuperAdminService {
    create(createSuperAdminDto: CreateSuperAdminDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateSuperAdminDto: UpdateSuperAdminDto): string;
    remove(id: number): string;
}
