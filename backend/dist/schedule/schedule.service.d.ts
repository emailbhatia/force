import { Repository } from 'typeorm';
import { Shift } from './shift.entity';
export declare class ScheduleService {
    private shiftRepository;
    constructor(shiftRepository: Repository<Shift>);
    createShift(createShiftDto: any): Promise<Shift[]>;
    findAllShifts(): Promise<Shift[]>;
    findShiftsByUser(userId: number): Promise<Shift[]>;
}
