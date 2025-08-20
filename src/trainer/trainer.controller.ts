import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TrainerService } from './trainer.service';
import { CreateTrainerDto } from './dto/create-trainer.dto';
import { UpdateTrainerDto } from './dto/update-trainer.dto';

@Controller('trainer')
export class TrainerController {
  constructor(private readonly trainerService: TrainerService) {}

  // Create a new trainer linked to an existing user
  @Post()
  async create(@Body() createTrainerDto: CreateTrainerDto) {
    return await this.trainerService.create(createTrainerDto);
  }

  // Get all trainers with their associated users
  @Get()
  async findAll() {
    return await this.trainerService.findAll();
  }

  // Get a single trainer by ID
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.trainerService.findOne(id);
  }

  // Update trainer information (currently only timestamps exist)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTrainerDto: UpdateTrainerDto) {
    return await this.trainerService.update(id, updateTrainerDto);
  }

  // Delete a trainer
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.trainerService.remove(id);
  }
}
