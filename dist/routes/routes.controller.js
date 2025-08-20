"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesController = void 0;
const common_1 = require("@nestjs/common");
const routes_service_1 = require("./routes.service");
const schedule_visit_dto_1 = require("./dto/schedule-visit.dto");
const request_visit_dto_1 = require("./dto/request-visit.dto");
const donate_device_dto_1 = require("./dto/donate-device.dto");
const volunteer_dto_1 = require("./dto/volunteer.dto");
const join_training_dto_1 = require("./dto/join-training.dto");
let RoutesController = class RoutesController {
    routesService;
    constructor(routesService) {
        this.routesService = routesService;
    }
    getRoutes() {
        return { message: 'Welcome to the Digitus Backend Routes' };
    }
    schedule(dto) {
        return this.routesService.scheduleVisit(dto);
    }
    request(dto) {
        return this.routesService.requestVisit(dto);
    }
    donate(dto) {
        return this.routesService.donateDevice(dto);
    }
    volunteer(dto) {
        return this.routesService.becomeVolunteer(dto);
    }
    training(dto) {
        return this.routesService.joinTraining(dto);
    }
    getScheduledVisits() {
        return this.routesService.getAllScheduledVisits();
    }
    getRequestedVisits() {
        return this.routesService.getAllRequestedVisits();
    }
    getDonations() {
        return this.routesService.getAllDonations();
    }
    getVolunteers() {
        return this.routesService.getAllVolunteers();
    }
    getTrainings() {
        return this.routesService.getAllTrainings();
    }
};
exports.RoutesController = RoutesController;
__decorate([
    (0, common_1.Get)(""),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RoutesController.prototype, "getRoutes", null);
__decorate([
    (0, common_1.Post)('schedule'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [schedule_visit_dto_1.ScheduleVisitDto]),
    __metadata("design:returntype", void 0)
], RoutesController.prototype, "schedule", null);
__decorate([
    (0, common_1.Post)('request'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_visit_dto_1.RequestVisitDto]),
    __metadata("design:returntype", void 0)
], RoutesController.prototype, "request", null);
__decorate([
    (0, common_1.Post)('donate-device'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [donate_device_dto_1.DonateDeviceDto]),
    __metadata("design:returntype", void 0)
], RoutesController.prototype, "donate", null);
__decorate([
    (0, common_1.Post)('volunteer'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [volunteer_dto_1.VolunteerDto]),
    __metadata("design:returntype", void 0)
], RoutesController.prototype, "volunteer", null);
__decorate([
    (0, common_1.Post)('training'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [join_training_dto_1.JoinTrainingDto]),
    __metadata("design:returntype", void 0)
], RoutesController.prototype, "training", null);
__decorate([
    (0, common_1.Get)('schedule'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RoutesController.prototype, "getScheduledVisits", null);
__decorate([
    (0, common_1.Get)('request'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RoutesController.prototype, "getRequestedVisits", null);
__decorate([
    (0, common_1.Get)('donate-device'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RoutesController.prototype, "getDonations", null);
__decorate([
    (0, common_1.Get)('volunteer'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RoutesController.prototype, "getVolunteers", null);
__decorate([
    (0, common_1.Get)('training'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RoutesController.prototype, "getTrainings", null);
exports.RoutesController = RoutesController = __decorate([
    (0, common_1.Controller)('routes'),
    __metadata("design:paramtypes", [routes_service_1.RoutesService])
], RoutesController);
//# sourceMappingURL=routes.controller.js.map