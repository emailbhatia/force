import { ScheduleService } from './schedule.service';
export declare class ScheduleController {
    private readonly scheduleService;
    constructor(scheduleService: ScheduleService);
    create(createShiftDto: any): Promise<import("./shift.entity").Shift[]>;
    findAll(): Promise<import("./shift.entity").Shift[]>;
    findByUser(userId: string): Promise<import("./shift.entity").Shift[]>;
}
