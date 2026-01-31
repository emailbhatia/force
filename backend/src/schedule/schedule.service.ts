import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shift } from './shift.entity';

@Injectable()
export class ScheduleService {
    constructor(
        @InjectRepository(Shift)
        private shiftRepository: Repository<Shift>,
    ) { }

    createShift(createShiftDto: any) {
        const shift = this.shiftRepository.create(createShiftDto);
        return this.shiftRepository.save(shift);
    }

    findAllShifts() {
        return this.shiftRepository.find({ relations: ['user'] });
    }

    findShiftsByUser(userId: number) {
        return this.shiftRepository.find({ where: { userId }, relations: ['user'] });
    }
}
