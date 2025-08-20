import { SuperAdminService } from './super-admin.service';
import { CreateSuperAdminDto } from './dto/create-super-admin.dto';
import { UpdateSuperAdminDto } from './dto/update-super-admin.dto';
export declare class SuperAdminController {
    private readonly superAdminService;
    constructor(superAdminService: SuperAdminService);
    create(createSuperAdminDto: CreateSuperAdminDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateSuperAdminDto: UpdateSuperAdminDto): string;
    remove(id: string): string;
}
