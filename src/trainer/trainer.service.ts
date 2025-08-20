import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTrainerDto } from './dto/create-trainer.dto';
import { UpdateTrainerDto } from './dto/update-trainer.dto';

@Injectable()
export class TrainerService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTrainerDto: CreateTrainerDto) {
    return this.prisma.trainer.create({
      data: {
        user: {
          connect: { id: (createTrainerDto as any).userId }, // link to existing user
        },
      },
    });
  }

  async findAll() {
    return this.prisma.trainer.findMany({
      include: { user: true }, // fetch related user
    });
  }

  async findOne(id: string) {
    return this.prisma.trainer.findUnique({
      where: { id },
      include: { user: true },
    });
  }

  async update(id: string, updateTrainerDto: UpdateTrainerDto) {
    return this.prisma.trainer.update({
      where: { id },
      data: updateTrainerDto,
    });
  }

  async remove(id: string) {
    return this.prisma.trainer.delete({
      where: { id },
    });
  }
}
