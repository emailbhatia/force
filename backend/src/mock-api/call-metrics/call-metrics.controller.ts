import { Controller, Get } from '@nestjs/common';
import { CallMetricsService } from './call-metrics.service';

@Controller('call-metrics')
export class CallMetricsController {
    constructor(private readonly callMetricsService: CallMetricsService) { }

    @Get()
    getMetrics() {
        return this.callMetricsService.getMetrics();
    }
}
