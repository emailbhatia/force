import { Module } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleController } from './schedule.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shift } from './shift.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Shift])],
  providers: [ScheduleService],
  controllers: [ScheduleController],
})
export class ScheduleModule { }
