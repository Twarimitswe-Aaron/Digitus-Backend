import { Controller, Post, Body, Get } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { ScheduleVisitDto } from './dto/schedule-visit.dto';
import { RequestVisitDto } from './dto/request-visit.dto';
import { DonateDeviceDto } from './dto/donate-device.dto';
import { VolunteerDto } from './dto/volunteer.dto';
import { JoinTrainingDto } from './dto/join-training.dto';

@Controller('routes')
export class RoutesController {
  constructor(private readonly routesService: RoutesService) {}
  @Get("")
  getRoutes() {
    return { message: 'Welcome to the Digitus Backend Routes' };
  }
  @Post('schedule')
  schedule(@Body() dto: ScheduleVisitDto) {
    return this.routesService.scheduleVisit(dto);
  }

  @Post('request')
  request(@Body() dto: RequestVisitDto) {
    return this.routesService.requestVisit(dto);
  }

  @Post('donate-device')
  donate(@Body() dto: DonateDeviceDto) {
    return this.routesService.donateDevice(dto);
  }

  @Post('volunteer')
  volunteer(@Body() dto: VolunteerDto) {
    return this.routesService.becomeVolunteer(dto);
  }

  @Post('training')
  training(@Body() dto: JoinTrainingDto) {
    return this.routesService.joinTraining(dto);
  }

   @Get('schedule')
  getScheduledVisits() {
    return this.routesService.getAllScheduledVisits();
  }

  @Get('request')
  getRequestedVisits() {
    return this.routesService.getAllRequestedVisits();
  }

  @Get('donate-device')
  getDonations() {
    return this.routesService.getAllDonations();
  }

  @Get('volunteer')
  getVolunteers() {
    return this.routesService.getAllVolunteers();
  }

  @Get('training')
  getTrainings() {
    return this.routesService.getAllTrainings();
  }
}


