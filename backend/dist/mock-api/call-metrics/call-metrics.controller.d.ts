import { CallMetricsService } from './call-metrics.service';
export declare class CallMetricsController {
    private readonly callMetricsService;
    constructor(callMetricsService: CallMetricsService);
    getMetrics(): {
        callsWaiting: number;
        activeCalls: number;
        averageHandleTime: number;
        serviceLevel: number;
        timestamp: string;
    };
}
