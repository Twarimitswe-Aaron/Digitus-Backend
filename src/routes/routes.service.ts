import { Injectable } from '@nestjs/common';
import { ScheduleVisitDto } from './dto/schedule-visit.dto';
import { RequestVisitDto } from './dto/request-visit.dto';
import { DonateDeviceDto } from './dto/donate-device.dto';
import { VolunteerDto } from './dto/volunteer.dto';
import { JoinTrainingDto } from './dto/join-training.dto';

@Injectable()
export class RoutesService {
  private scheduledVisits: ScheduleVisitDto[] = [];
  private requestedVisits: RequestVisitDto[] = [];
  private donations: DonateDeviceDto[] = [];
  private volunteers: VolunteerDto[] = [];
  private trainings: JoinTrainingDto[] = [];

  scheduleVisit(dto: ScheduleVisitDto) {
    this.scheduledVisits.push(dto);
    return { message: 'Visit scheduled', data: dto };
  }

  requestVisit(dto: RequestVisitDto) {
    this.requestedVisits.push(dto);
    return { message: 'Visit requested', data: dto };
  }

  donateDevice(dto: DonateDeviceDto) {
    this.donations.push(dto);
    return { message: 'Device donation received', data: dto };
  }

  becomeVolunteer(dto: VolunteerDto) {
    this.volunteers.push(dto);
    return { message: 'Volunteer registration successful', data: dto };
  }

  joinTraining(dto: JoinTrainingDto) {
    this.trainings.push(dto);
    return { message: 'Training application received', data: dto };
  }

  getAllScheduledVisits() {
    return { 
      message: 'All scheduled visits retrieved', 
      data: this.scheduledVisits,
      count: this.scheduledVisits.length 
    };
  }

  getAllRequestedVisits() {
    return { 
      message: 'All requested visits retrieved', 
      data: this.requestedVisits,
      count: this.requestedVisits.length 
    };
  }

  getAllDonations() {
    return { 
      message: 'All donations retrieved', 
      data: this.donations,
      count: this.donations.length 
    };
  }

  getAllVolunteers() {
    return { 
      message: 'All volunteers retrieved', 
      data: this.volunteers,
      count: this.volunteers.length 
    };
  }

  getAllTrainings() {
    return { 
      message: 'All training applications retrieved', 
      data: this.trainings,
      count: this.trainings.length 
    };
  }
}
