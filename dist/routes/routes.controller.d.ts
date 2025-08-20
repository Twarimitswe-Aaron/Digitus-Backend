import { RoutesService } from './routes.service';
import { ScheduleVisitDto } from './dto/schedule-visit.dto';
import { RequestVisitDto } from './dto/request-visit.dto';
import { DonateDeviceDto } from './dto/donate-device.dto';
import { VolunteerDto } from './dto/volunteer.dto';
import { JoinTrainingDto } from './dto/join-training.dto';
export declare class RoutesController {
    private readonly routesService;
    constructor(routesService: RoutesService);
    getRoutes(): {
        message: string;
    };
    schedule(dto: ScheduleVisitDto): {
        message: string;
        data: ScheduleVisitDto;
    };
    request(dto: RequestVisitDto): {
        message: string;
        data: RequestVisitDto;
    };
    donate(dto: DonateDeviceDto): {
        message: string;
        data: DonateDeviceDto;
    };
    volunteer(dto: VolunteerDto): {
        message: string;
        data: VolunteerDto;
    };
    training(dto: JoinTrainingDto): {
        message: string;
        data: JoinTrainingDto;
    };
    getScheduledVisits(): {
        message: string;
        data: ScheduleVisitDto[];
        count: number;
    };
    getRequestedVisits(): {
        message: string;
        data: RequestVisitDto[];
        count: number;
    };
    getDonations(): {
        message: string;
        data: DonateDeviceDto[];
        count: number;
    };
    getVolunteers(): {
        message: string;
        data: VolunteerDto[];
        count: number;
    };
    getTrainings(): {
        message: string;
        data: JoinTrainingDto[];
        count: number;
    };
}
