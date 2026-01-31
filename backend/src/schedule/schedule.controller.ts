import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('schedule')
export class ScheduleController {
    constructor(private readonly scheduleService: ScheduleService) { }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    create(@Body() createShiftDto: any) {
        return this.scheduleService.createShift(createShiftDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    findAll() {
        return this.scheduleService.findAllShifts();
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('user/:userId')
    findByUser(@Param('userId') userId: string) {
        return this.scheduleService.findShiftsByUser(+userId);
    }
}
