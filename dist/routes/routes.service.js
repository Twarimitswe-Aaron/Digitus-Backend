"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesService = void 0;
const common_1 = require("@nestjs/common");
let RoutesService = class RoutesService {
    scheduledVisits = [];
    requestedVisits = [];
    donations = [];
    volunteers = [];
    trainings = [];
    scheduleVisit(dto) {
        this.scheduledVisits.push(dto);
        return { message: 'Visit scheduled', data: dto };
    }
    requestVisit(dto) {
        this.requestedVisits.push(dto);
        return { message: 'Visit requested', data: dto };
    }
    donateDevice(dto) {
        this.donations.push(dto);
        return { message: 'Device donation received', data: dto };
    }
    becomeVolunteer(dto) {
        this.volunteers.push(dto);
        return { message: 'Volunteer registration successful', data: dto };
    }
    joinTraining(dto) {
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
};
exports.RoutesService = RoutesService;
exports.RoutesService = RoutesService = __decorate([
    (0, common_1.Injectable)()
], RoutesService);
//# sourceMappingURL=routes.service.js.map