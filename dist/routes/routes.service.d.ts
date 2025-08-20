import { ScheduleVisitDto } from './dto/schedule-visit.dto';
import { RequestVisitDto } from './dto/request-visit.dto';
import { DonateDeviceDto } from './dto/donate-device.dto';
import { VolunteerDto } from './dto/volunteer.dto';
import { JoinTrainingDto } from './dto/join-training.dto';
export declare class RoutesService {
    private scheduledVisits;
    private requestedVisits;
    private donations;
    private volunteers;
    private trainings;
    scheduleVisit(dto: ScheduleVisitDto): {
        message: string;
        data: ScheduleVisitDto;
    };
    requestVisit(dto: RequestVisitDto): {
        message: string;
        data: RequestVisitDto;
    };
    donateDevice(dto: DonateDeviceDto): {
        message: string;
        data: DonateDeviceDto;
    };
    becomeVolunteer(dto: VolunteerDto): {
        message: string;
        data: VolunteerDto;
    };
    joinTraining(dto: JoinTrainingDto): {
        message: string;
        data: JoinTrainingDto;
    };
    getAllScheduledVisits(): {
        message: string;
        data: ScheduleVisitDto[];
        count: number;
    };
    getAllRequestedVisits(): {
        message: string;
        data: RequestVisitDto[];
        count: number;
    };
    getAllDonations(): {
        message: string;
        data: DonateDeviceDto[];
        count: number;
    };
    getAllVolunteers(): {
        message: string;
        data: VolunteerDto[];
        count: number;
    };
    getAllTrainings(): {
        message: string;
        data: JoinTrainingDto[];
        count: number;
    };
}
